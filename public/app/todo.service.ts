import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Todo } from "./todo";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  private headers = new HttpHeaders({ "Content-Type": "application/json" });
  private todosApiUrl = "/api/todos/test";

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>(this.todosApiUrl)
      .pipe(map((response) => response as Todo[]));
  }
}

// import { Injectable } from '@angular/core';
// import { Headers, Http } from '@angular/http';

// import 'rxjs/add/operator/toPromise';

// import { Todo } from './todo';

// @Injectable()
// export class TodoService {

//   private headers = new Headers({'Content-Type': 'application/json'});
//   private todosApiUrl = '/api/todos/test';

//   constructor(private http: Http) { }

//   getTodos(): Promise<Todo[]> {
//     return this.http.get(this.todosApiUrl)
//                .toPromise()
//                .then(response => response.json() as Todo[])
//   }
// }
