/**
 * Created by Administrator on 2018/6/20.
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class SerachProvider {
  constructor(public http: HttpClient) {
    console.log('Hello CityProvider Provider');

  }
  search(id: number,keyword:string): Observable<any> {
    return this.http.get(
      'http://cangdu.org:8001/v1/pois?city_id='+id+'&keyword='+keyword+'&type=search'
    ).map(res => {
      return res;
    })
  }
}
