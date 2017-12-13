import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';


@Injectable()
export class ExistingForumsService {

  baseUrl = 'http://localhost:3000/autogf/v1';

  constructor(private http: HttpClient) { }

  getExistingForums(): any {

    const endpoint = '/sites/2/forums';

    // TO DO add siteid param !!!!!!!!!!
    return this.http.get(this.baseUrl + endpoint);
  }

}
