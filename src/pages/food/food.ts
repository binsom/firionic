import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import {FoodProvider} from "../../providers/binone/food";

/**
 * Generated class for the FoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-food',
  templateUrl: 'food.html',
})
export class FoodPage {
  public foods:any;
  public imgUrls=[];
  public prefixtion = 'https://fuss10.elemecdn.com';
  public len;


  constructor(public navCtrl: NavController, public navParams: NavParams,public foodProvider:FoodProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodPage');
  }
  ngOnInit(){
    this.getFood();
  }
  getFood(){
    this.foodProvider.getFood().subscribe(res => {
      for(let i=0;i<res.length;i++){
        this.imgUrls.push({img:this.prefixtion+res[i].image_url});
      }
      this.foods = res;
      this.len=this.imgUrls.length;
      console.log(this.imgUrls,'===ffffffffff');
    });
  }

}
