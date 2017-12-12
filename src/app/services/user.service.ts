import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {Headers, Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { User } from '../models/user.model';

@Injectable()
export class UserService {

  private serviceUrl = 'https://jsonplaceholder.typicode.com/users';


  constructor(private http: Http) { }

  getUser(): Observable<User[]> {
    return this.http.get(this.serviceUrl)
    .map((res: Response) => <User[]>res.json());
    // .do(data => console.log('All: ' +  JSON.stringify(data)));
  }
}
