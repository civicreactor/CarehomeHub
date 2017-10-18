import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class InfoService {
  constructor(private http: Http) { }

  get() {
    console.log('Serving info.json');
    return this.http.get(environment.INFO)
      .map(response => response.json());
  }
}
