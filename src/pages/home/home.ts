import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BinoneProvider} from "../../providers/binone/binone";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  binheros:any;
  news:any;

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
        console.log(res);
      });
  }

}
