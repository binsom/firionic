import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BinoneProvider} from "../../providers/binone/binone";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  binheros:any;
  news=[];
  searchQuery: string = '';
  items: string[];

  constructor(public navCtrl: NavController,public binoneProvider:BinoneProvider) {

  }

  ngOnInit(){
    // this.getbin();
    this.f();
    this.initializeItems();
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
        console.log(this.news,'===news')
        // console.log(this.news.data[0].media_name,666);
      });
  }

  /* 加载更多 */
  loadMore(loadEvent) {
    this.binoneProvider.newsTech().subscribe(res => {
      console.log(res.data,'===res.data');
      let len = res.data.length;
      for(var i=0;i<len;i++){
        this.news.push(res.data[i]);
      }
      //这个loadMore()必须结束掉才能出发下一次loadMore();
      //一旦请求完成之后，$event.complete()手动结束
      loadEvent.complete();
      console.log(this.news,666);
    });
}

  initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota',
      'aaaa'
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the searchbar
    const val = ev.target.value;
    console.log(val);
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);

      })
    }
  }


}
