import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  constructor(private http: HttpClient) { }

  loadAllPost(func: (posts: Post[]) => void) {
    this.http.get<Post[]>('/posts.json').subscribe(func);
  }

  loadPost(index: number, func: (post: Post) => void) {
    this.loadAllPost((posts: Post[]) => func(posts[index]));
  }
}

export type Post = {
  title: string,
  date: string,
  content: string,
  description: string
}
