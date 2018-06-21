import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CityProvider} from "../../providers/binone/city";
import {SerachProvider} from "../../providers/binone/serach";
import {FoodPage} from "../food/food";

/**
 * Generated class for the CitydetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-citydetail',
  templateUrl: 'citydetail.html',
})
export class CitydetailPage {
  navData:any;
  searchInput:any = {};
  public cityId:any;
  public searchContents:any = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public cityProvider:CityProvider,
    public serachProvider:SerachProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CitydetailPage');
  }
  ngOnInit(){
    this.getDetailData();
  }

  getDetailData(){
    this.navData = this.navParams;
    const id = +this.navData.data.id;
    this.cityId = id;
    this.cityProvider.getDetailCity(id).subscribe(res => {
      this.navData = res;
    });
  }

  search(name:string){
    this.serachProvider.search(this.cityId,name).subscribe(res => {
      console.log(this.cityId,name);
      this.searchContents = res;
      console.log(this.searchContents);
    });
  }

  toFood(){
    this.navCtrl.push(FoodPage)
  }
}
