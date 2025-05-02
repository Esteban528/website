import { Component, Input } from '@angular/core';
import { BlogDataService, Post } from '../blog-data.service';
import { Router, RouterLink } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-view-post',
  imports: [RouterLink, MarkdownModule],
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.css',
})
export class ViewPostComponent {
  post!: Post;

  constructor(private service: BlogDataService, private router:Router) {

  }

  @Input()
  set id(id: number) {
    this.service.loadPost(id, (p) => {
      if (p)
        this.setPost(p)
      else
      this.router.navigate(['/blog']);
    })
  }

  setPost(post: Post) {
    this.post = post;
  }
}
