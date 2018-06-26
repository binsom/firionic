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


  captchas(): Observable<any> {
      return this.http.post(
        'http://cangdu.org:8001/v1/captchas'
      ).map(res => {
        return res;
      })
    }


  // login(username: string,password: string,captcha_code: string): Observable<any> {
  //   return this.http.post(
  //     'http://cangdu.org:8001/v2/login?username='+username+'&password='+password+'&captcha_code='+captcha_code
  //   ).map(res => {
  //     return res;
  //   })
  // }
}
