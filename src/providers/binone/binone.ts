import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {HEROES} from "./mock";

/*
  Generated class for the BinoneProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BinoneProvider {
  path: string = 'https://m.toutiao.com/list/?tag=news_society&ac=wap&count=8&format=json_raw&as=A1053B51170D35E&cp=5B17FDA3C51EFE1&min_behot_time=0&_signature=csEwaAAAKdmOuNoU3eXa6nLBMH&i=';

  constructor(public http: HttpClient) {
    console.log('Hello BinoneProvider Provider');

  }

  getHero():Observable<any>{
      return Observable.of(HEROES)
  }
  newsTech(): Observable<any> {
    return this.http.get(
      this.path
    ).map(res => {
      return res;
    })
  }

}
