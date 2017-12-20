import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';


@Injectable()
export class ForumsCompareFeedbackService {

  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getFeedback(id: string): any {

    const endpoint = `newForums/${id}/feedback`;

    return this.http.get(this.baseUrl + endpoint);
  }

  editFeedback(id: string, body: string): any {

    const endpoint = `newForums/${id}`;

    return this.http.patch(this.baseUrl + endpoint, body);
  }

}
