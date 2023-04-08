import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/Post/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'http://localhost:5248/api/post/';

  constructor(private http: HttpClient) { }

  get(id: string) {
    return this.http.get<Post>(this.apiUrl + id)
  }

  getList() {
    return this.http.get<Post[]>(this.apiUrl + 'list');
  }

}
