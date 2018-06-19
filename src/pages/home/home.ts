import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BinoneProvider} from "../../providers/binone/binone";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  binheros:any;
  news = [];

  items = [];

  constructor(public navCtrl: NavController,public binoneProvider:BinoneProvider) {

  }

  ngOnInit(){
    // this.getbin();
    this.f();
  }
  // getbin():void{
  //     this.binoneProvider.getHero()
  //       .subscribe(heros=>{
  //         for(var i=0;i<heros.length;i++){
  //           this.binheros = heros[0].arr;
  //          }
  //         }
  //       )
  // }
  f(){
    this.binoneProvider.newsTech().subscribe(res => {
        // console.log(res);
        this.news = res.data;
        console.log(this.news,999)
        // console.log(this.news.data[0].media_name,666);
      });
  }

  /* 加载更多 */
  loadMore(loadEvent) {
    console.log(111);
    this.binoneProvider.newsTech().subscribe(res => {
      console.log(res.data,555);
      let len = res.data.length;
      for(var i=0;i<len;i++){
        this.news.push(res.data[i]);
      }
      //这个loadMore()必须结束掉才能出发下一次loadMore() ；
      //一旦请求完成之后，$event.complete()手动结束
      loadEvent.complete();
      console.log(this.news,666);
    });
}


}
