import { Injectable } from '@angular/core';
import { ApiRequest, ApiService, Post } from './api.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  constructor(private api: ApiService) { }

  loadAllPost(func: (posts: Post[]) => void) {
    const request: ApiRequest<Post[]> = {
      url: environment.postsUrl,
      method: 'get',
      on_respond: (res) => {
        func(res)
      },
      on_error(err) {
        console.error(err)
      },
    }

    this.api.call(request);
  }

  loadPost(id: number, func: (post: Post | undefined) => void) {
    const request: ApiRequest<Post> = {
      url: environment.postsUrl+'/'+id,
      method: 'get',
      on_respond: (res) => {
        func(res)
      },
      on_error(res) {},
    }

    this.api.call(request);
  }
}

