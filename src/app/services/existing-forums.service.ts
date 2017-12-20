import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ExistingForumsService {

  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getExistingForums(siteid: string): any {

    const endpoint = `sites/${siteid}/forums`;

    return this.http.get(this.baseUrl + endpoint);
  }

}
