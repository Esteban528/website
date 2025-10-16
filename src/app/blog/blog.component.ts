import { Component, input, OnInit } from '@angular/core';
import { BlogDataService, Post } from './blog-data.service';
import { LucideAngularModule, Rss } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-blog',
  imports: [LucideAngularModule, RouterLink, LoadingSpinnerComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  max = input(0);
  loading = true;

  private posts: Array<Post> = [];

  private dateText = {
    today: () => "Hoy",
    yesterday: () => "Ayer",
    daysAgo: (days: number) => `Hace ${days} días`,
    monthAgo: (months: number) => `Hace ${months} meses`,
  }

  readonly Rss = Rss;

  constructor(private service: BlogDataService) {
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

  getDiffDays(stringDate: string): number {
    const date = new Date(stringDate);
    const now = new Date();
    const msPerDay = 1000 * 60 * 60 * 24

    const total = Math.floor((now.getTime() - date.getTime()) / msPerDay);

    return isNaN(total) ? -1 : total;
  }

  getDaysMessage(stringDate: string): string {
    const days = this.getDiffDays(stringDate);

    return days == 0 ? this.dateText.today()
      : days == 1 ? this.dateText.yesterday()
        : days < 30 ? this.dateText.daysAgo(days)
          : this.dateText.monthAgo(Math.ceil(days / 30));
  }
}
