import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Headers, Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Site } from '../models/site.model';

@Injectable()
export class SitesService {

  private serviceUrl = 'http://192.168.0.51:3000/autogf/v1/sites?pageSize=10000';

  constructor(private http: Http, private httpClient: HttpClient) { }

  getSites(): Observable<Site[]> {
    return this.httpClient.get<Site[]>(this.serviceUrl, {responseType: 'json'});
  }

}
