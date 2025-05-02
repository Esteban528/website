import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  constructor(private http: HttpClient) { }

  loadAllPost(func: (posts: Post[]) => void) {
    this.http.get<Post[]>(environment.postsUrl).subscribe(func);
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
