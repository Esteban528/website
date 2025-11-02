import { Component, input, OnInit } from '@angular/core';
import { LucideAngularModule, Rss } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { LoadingSpinnerComponent } from '../../shared/loading-spinner/loading-spinner.component';
import { UtilsService } from '../../core/utils.service';
import { Post } from '../../core/api.service';
import { BlogDataService } from '../../core/blog-data.service';

@Component({
  selector: 'app-blog',
  imports: [LucideAngularModule, RouterLink, LoadingSpinnerComponent],
  templateUrl: './blog.component.html',
})
export class BlogComponent implements OnInit {
  max = input(0);
  loading = true;

  private posts: Array<Post> = [];

  readonly Rss = Rss;

  constructor(private service: BlogDataService, public util:UtilsService) {
  }

  ngOnInit(): void {
    this.service.loadAllPost((p) => this.setPosts(p));
  }

  setPosts(posts: Array<Post>) {
    this.posts = posts;
    this.loading = false;
  }

  getPosts() {
    if (this.max() != 0){
      return this.posts.slice(0, this.max());
    }
    return this.posts;
  }
}
