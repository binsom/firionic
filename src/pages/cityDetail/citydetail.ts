import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CityProvider} from "../../providers/binone/city";
import {SerachProvider} from "../../providers/binone/serach";
import {FoodPage} from "../food/food";
import {Storage} from '@ionic/storage';

/**
 * Generated class for the CitydetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var BMap;

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
  public local;
  public history:string;
  public historys=[];
  public historyss=[];
  public classFlag = true;



  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public cityProvider:CityProvider,
    public serachProvider:SerachProvider,
    public storage: Storage
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CitydetailPage');
  }
  ngOnInit(){
    this.getDetailData();
    this.mapLocal();
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
      this.searchContents = res;
    });
  }
  setHistory(history){
    console.log(history);
    this.history = JSON.stringify(history);
    this.historys.push(history);

      console.log(this.historys,'===historys');

      //数组去重
      this.historyss = [];
      for(var i=0,len=this.historys.length; i<len;i++) {
        for (var j = i + 1; j < len; j++) {
          if (this.historys[i].name === this.historys[j].name) {//获取没重复的最右一值放入新数组
            ++i;
          }
        }
        this.historyss.push(this.historys[i]);
      }

    console.log(this.historyss,'===========arr')

    localStorage.setItem('placeHistory',this.history);
    this.searchContents = [];
    this.navCtrl.push(FoodPage,history);
  }

  getHistory(){
   localStorage.getItem('placeHistory');
  }

  ionViewDidEnter(){
    this.getHistory();
  }

  cleanHistory(){
    this.historyss = [];
  }

  //百度地图定位
  mapLocal() {
    let local = new BMap.LocalCity();
    local.get((result)=>{
      console.log(result)
    })
  }


  // 动态控制类名
  changeClass(): void {
    this.classFlag = !this.classFlag;
  }

}
