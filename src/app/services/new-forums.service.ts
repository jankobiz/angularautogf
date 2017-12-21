import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class NewForumsService {

  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getNewForums(siteid: string): any {

    const endpoint = `sites/${siteid}/newForums`;

    return this.http.get(this.baseUrl + endpoint);
  }

}
