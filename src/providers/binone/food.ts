/**
 * Created by Administrator on 2018/6/21.
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class FoodProvider {
  constructor(public http: HttpClient) {
    console.log('Hello CityProvider Provider');

  }
  getFood(): Observable<any> {
    return this.http.get(
      'http://cangdu.org:8001/v2/index_entry'
    ).map(res => {
      return res;
    })
  }
}
