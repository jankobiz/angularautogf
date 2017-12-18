import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ExistingForumsService {

  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getExistingForums(): any {

    const endpoint = 'sites/2/forums';

    // TO DO add siteid param !!!!!!!!!!
    return this.http.get(this.baseUrl + endpoint);
  }

}
