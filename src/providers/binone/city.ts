/**
 * Created by Administrator on 2018/6/19.
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class CityProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CityProvider Provider');

  }


  getCity(cityType:string): Observable<any> {
    return this.http.get(
      'http://cangdu.org:8001/v1/cities?type='+cityType
    ).map(res => {
      return res;
    })
  }


  getDetailCity(id: number): Observable<any> {
    return this.http.get(
      'http://cangdu.org:8001/v1/cities/'+id
    ).map(res => {
      return res;
    })
  }


}
