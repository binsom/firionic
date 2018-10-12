/**
 * Created by Administrator on 2018/6/26.
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {HttpHeaders} from "@angular/common/http";

@Injectable()
export class LoginProvider {



  constructor(public http: HttpClient) {
    console.log('Hello LoginProvider Provider');

  }

  //
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

  login(): Observable<any> {
    return this.http.post(
      "http://39.108.159.135/api/doLogin",
      {
        tel:18400163785,
        password:"336699"
      },
      {
        headers:new HttpHeaders({
          "Content-Type":"application/json",
          "Accept":"application/json"
        })
      }
    ).map(res => {
      return res;
    })
  };


}
