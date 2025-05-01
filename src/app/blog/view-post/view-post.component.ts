import { Component, Input } from '@angular/core';
import { BlogDataService, Post } from '../blog-data.service';
import { RouterLink } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-view-post',
  imports: [RouterLink, MarkdownModule],
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.css',
})
export class ViewPostComponent {
  post!: Post;

  constructor(private service: BlogDataService) {

  }

  @Input()
  set id(id: number) {
    this.service.loadPost(id, (p) => this.setPost(p))
  }

  setPost(post: Post) {
    this.post = post;
  }
}
