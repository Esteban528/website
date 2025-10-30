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

  loadPost(id: number, func: (post: Post | undefined) => void) {
    this.loadAllPost((posts: Post[]) => {
      const post = posts.find((p: Post) => p.id == id);
      func(post);
    });
  }
}

export type Post = {
  id?: number,
  author?: string,
  title?: string,
  description?: string,
  content?: string,
  date?: string,
};
