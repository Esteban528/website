import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

  }

  httpBasicHeaders(user: string = "", password: string = ""): HttpHeaders {
    const token = btoa(`${user}:${password}`)
    return new HttpHeaders().set('Authorization', `Basic ${token}`);
  }

  call(request: ApiRequest) {
    const options = {
      headers: {}
    };

    if (request.user) {
      options.headers = this.httpBasicHeaders(request.user, request.password)
    }

    let observable;

    switch (request.method) {
      case 'get':
        observable = this.http.get(request.url, options);
        break;
      case 'post':
        observable = this.http.post(request.url, request.content, options);
        break;
      case 'put':
        observable = this.http.put(request.url, request.content, options);
        break;
      case 'delete':
        observable = this.http.delete(request.url, options);
        break;
      default:
        throw new Error(`Not supported: ${request.method}`);
    }

    observable.subscribe({
      next: (res) => {
        request.on_respond(res)
      },
      error: (err) => request.on_error(err),
    });
  }
}

export type ApiRequest = {
  url: string;
  method: 'get' | 'post' | 'put' | 'delete';
  content?: any;
  user?: string;
  password?: string;
  on_respond: (res:Object)=>void,
  on_error: (res:Object)=>void
}
