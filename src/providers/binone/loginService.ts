/**
 * Created by Administrator on 2018/6/26.
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginProvider {



  constructor(public http: HttpClient) {
    console.log('Hello LoginProvider Provider');

  }


  // captchas(): Observable<any> {
  //     return this.http.post(
  //       'http://cangdu.org:8001/v1/captchas'
  //     ).map(res => {
  //       return res;
  //     })
  //   }


  // login(Msg:Object): Observable<any> {
  //   return this.http.post(
  //     'http://cangdu.org:8001/v2/login',JSON.stringify(Msg),
  //   ).map(res => {
  //     return res;
  //   })
  // }


}
