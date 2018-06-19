import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {Page1} from "../page1/page1";
/*
 Generated class for the Page2 page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  testes:string[];
  kiss:Array<{tt:string,vv:string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];

    this.testes = ['1111111','2222222','333333333','44444444'];
    this.kiss = [];
    for(var i=0;i<4;i++){
      this.kiss.push({
        tit:'tittit'+i,
        tes:'This is #'+i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      })
    }
  }

  ionViewDidLoad() {
    console.log('Hello Page2 Page');
  }
  itemTap(event, item){
    this.navCtrl.push(Page1, {
      item: item
    });
  }
}
