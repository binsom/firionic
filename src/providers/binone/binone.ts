// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {HEROES} from "./mock";

/*
  Generated class for the BinoneProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BinoneProvider {

  // constructor(public http: HttpClient) {
  //   console.log('Hello BinoneProvider Provider');
  // }

  getHero():Observable<any>{
      return Observable.of(HEROES)
  }

}
