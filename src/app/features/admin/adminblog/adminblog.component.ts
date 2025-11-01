import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { BlogDataService, Post } from '../../blog/blog-data.service';
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { RenderPostComponent } from '../../blog/view-post/render-post/render-post.component';
import { LoadingSpinnerComponent } from '../../../shared/loading-spinner/loading-spinner.component';
import { UtilsService } from '../../../core/utils.service';
import { environment } from '../../../../environments/environment';
import { ApiRequest, ApiService } from '../../../core/api.service';

@Component({
  selector: 'app-adminblog',
  imports: [SidebarComponent, LoadingSpinnerComponent, FormsModule, MarkdownModule, RenderPostComponent],
  templateUrl: './adminblog.component.html',
  styleUrl: './adminblog.component.css'
})
export class AdminblogComponent implements OnInit {
  private posts: Array<Post> = [];
  loading = true;
  creating = false;
  editPost!: Post | null;
  user: string = "admin";
  password: string = "admin";

  constructor(private service: BlogDataService, private api: ApiService, public utils:UtilsService) {
  }

  ngOnInit(): void {
    this.update();
  }

  setPosts(posts: Array<Post>) {
    this.posts = posts;
    this.loading = false;
  }

  getPosts(): Array<Post> {
    return this.posts;
  }

  edit(post: Post) {
    if (this.editPost && this.editPost.id === post.id) {
      this.editPost = null;
      return;
    }

    this.editPost = Object.assign({}, post);;
  }

  confirmEdit() {
    if (!this.editPost)
      return;

    const request: ApiRequest = {
      url: environment.postsUrl,
      method: 'put',
      content: this.editPost,
      user: this.user,
      password: this.password,
      on_respond: (res) => {
        this.update()
        this.editPost = null;
      },
      on_error(res) {

      },
    }

    this.api.call(request);
  }

  apiCallback(res: any) {
    console.log(res)
  }

  delete(id: number) {
    const request: ApiRequest = {
      url: `${environment.postsUrl}/${id}`,
      method: 'delete',
      user: this.user,
      password: this.password,
      on_respond: (res) => {
        this.update();
        this.editPost = null;
      },
      on_error: (res) => {}
    }
    console.log(this.user)

    this.api.call(request);
  }

  update() {
    this.service.loadAllPost((p) => this.setPosts(p));
    this.loading = false
    console.log("loading")
  }

  cancelEdit() {
    this.editPost = null;
  }

  toggleCreatePanel() {
    this.creating = !this.creating;

    if (this.creating) {
      this.editPost = {
        date:new Date().toString()};
    }else {
      this.editPost = null;
    }
  }

  confirmCreate() {
    if (!this.creating || this.editPost == null)
      return

    const p = this.editPost;
    if (p.id != null ||
      this.isEmpty(p.author) ||
      this.isEmpty(p.content) ||
      this.isEmpty(p.description) ||
      this.isEmpty(p.title)
    ){
      alert("Invalid post; no field should be empty.")
      return
    }

    const request: ApiRequest = {
      url: `${environment.postsUrl}`,
      method: 'post',
      content: this.editPost,
      user: this.user,
      password: this.password,
      on_respond: (res) => {
        if (!res) {
          this.editPost = null;
          this.creating = false;
          this.update();
          return;
        }
      },
      on_error: (res) => alert("something was wrong, review the fields")
    }

    this.api.call(request);
  }

  isEmpty(field:string|null|undefined) {
    return field == undefined || field == null || field == ""
  }
}
