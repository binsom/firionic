import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Slides} from 'ionic-angular';
import {FoodProvider} from "../../providers/binone/food";
import {RestaurantsProvider} from "../../providers/binone/restaurants";
import { AlertController } from 'ionic-angular';
import {ContactPage} from "../contact/contact";
import {RestaurantDetailsPage} from "../restaurant-details/restaurant-details";


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
  @ViewChild('slides') slides: Slides;
  public foods:any;
  public imgUrls=[];
  public prefixtion = 'https://fuss10.elemecdn.com';
  public len:any;

  public pictureArr=[];
  public pictureArrLen:any;
  public title:any;
  public restaurantsLists=[];
  public latitude:any;
  public longitude:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public foodProvider:FoodProvider,public restaurantsProvider:RestaurantsProvider,public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodPage');
  }
  ngOnInit(){
    this.getFood();
    this.getRestaurantsList();
    let id = this.navParams.get("id");
    console.log(id,'===id');
  }
  getFood(){
    console.log( this.navParams,'从detail页面传过来的');

    // this.title = this.navParams.data.name;
    this.title = localStorage.getItem('placeName');

    this.latitude = this.navParams.data.latitude;
    this.longitude = this.navParams.data.longitude;


    this.foodProvider.getFood().subscribe(res => {

      console.log(res,'===getFood res');
      for(let i=0;i<res.length;i++){
         res[i].image_url = this.prefixtion+res[i].image_url;
      }
      this.foods = res;
      this.len = res.length;
      //多少组
      this.pictureArrLen = this.len/8;
      //把res转为数组对象 [{ index:j,img:[]} ]

      for(let j=0;j<this.pictureArrLen;j++){
        this.pictureArr.push({index:j,img:res.splice(0,8)});
      }
    });
  }
  getRestaurantsList(){
    this.restaurantsProvider.shopList(this.latitude,this.longitude).subscribe(res => {
        this.restaurantsLists = res;
        console.log(res,'获取商铺列表的数据',this.restaurantsLists)
    });
  }

  // // //页面进入时启动自动播放
  // ionViewDidEnter(){
  //   this.slides.startAutoplay();
  // }
  // //页面离开时停止自动播放
  // ionViewDidLeave(){
  //   this.slides.stopAutoplay();
  // }

  showAlert(category){
    const alert = this.alertCtrl.create({
      title: '地址',
      subTitle: category,
      buttons: ['OK']
    });
    alert.present();
  }

  goBack(){
    this.navCtrl.push(ContactPage);
  }
  restaurantDetails(restaurantId){
    this.restaurantsProvider.restaurantDetails(restaurantId).subscribe(res => {
      console.log(res,'商铺详情数据');
      this.navCtrl.push(RestaurantDetailsPage);
    });
  }

}
