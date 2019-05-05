import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  api = 'https://personalapi.plytas.com';

  constructor(private http: HttpClient) {}

  listTodos() {
    const url = `${this.api}/todo/list`;
    const data = {};
    return this.http.post(url, data);
  }

  createTodo(title: string, summary: string, description: string, tags: string[]) {
    const url = `${this.api}/todo/create`;
    const data = {
      title,
      summary,
      description,
      tags
    };
    return this.http.post(url, data);
  }

}
