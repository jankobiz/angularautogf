import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';


@Injectable()
export class NewForumsService {

  baseUrl = 'http://localhost:3000/autogf/v1';

  constructor(private http: HttpClient) { }

  getNewForums(): any {

    const endpoint = '/sites/2/newForums'
    // TO DO add siteid param !!!!!!!!!!
    return this.http.get(this.baseUrl + endpoint);
  }

}

