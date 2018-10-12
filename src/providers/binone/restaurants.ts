/**
 * Created by Administrator on 2018/6/26.
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class RestaurantsProvider {
  constructor(public http: HttpClient) {
    console.log('Hello RestaurantsProvider Provider');

  }
  shopList(latitude:string,longitude:string): Observable<any> {
    return this.http.get(
      // 'http://cangdu.org:8001/shopping/restaurants?latitude=31.22967&longitude=121.4762'
      'http://cangdu.org:8001/shopping/restaurants?latitude='+latitude+'&longitude='+longitude
    ).map(res => {
      return res;
    })
  }


  restaurantDetails(shopid:number): Observable<any> {
    return this.http.get(
      'https://elm.cangdu.org/shopping/restaurant/'+shopid
    ).map(res => {
      return res;
    })
  }
}
