import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CityProvider} from "../../providers/binone/city";
import {SerachProvider} from "../../providers/binone/serach";
import {Storage} from '@ionic/storage';
import {TabsPage} from "../tabs/tabs";
import {FoodPage} from "../food/food";

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
  @ViewChild('myattr') myattr: ElementRef;

  navData:any;
  searchInput:any = {};
  public cityId:any;
  public searchContents:any = [];
  public local;
  public history:string;
  public historys=[];
  public historyss=[];
  public classFlag = true;
  public placeName:string;
  public allHistory=[];
  public getStore;
  public pushPage;
  public params;
  public focus;
  public flag:boolean = false;
  public tel:number = 13413757483;
  public myDate='2017-10';    // 注意：一定要写成‘YYYY-MM-DD’这样的形式，不要写成‘YYYY/MM/DD’等其他的样式，不用与ion-datetime标签设置的样式一样


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
   this.getDom();



  }
  ngOnInit(){
    this.pushPage = FoodPage;
    this.params={id:22};
    this.getDetailData();
    this.mapLocal();
    document.getElementById('turnBtn').style.backgroundColor ='yellow';
    this.storage.get("kk").then((value)=>{
      console.log("这里是storage的get来获取======="+value);
    });
  }

  getDom(){//引入ElementRef操作dom节点
    let el: HTMLElement = <HTMLElement>this.myattr.nativeElement;
    el.onclick = function (e) {
        if(e.srcElement.nodeName=='SPAN'){
          var ele:any=e.target; //获取当前点击的元素
          console.log(ele,'===获取当前点击的元素');
        }
    }
    console.log(el,'===========el');

  }


  test(){
    this.cityProvider.test().subscribe(res => {
        console.log(res,'test的post类型');
    });
  }

  sendCode(){
    this.cityProvider.sendCode().subscribe(res => {
      console.log(res,'sendCode方法');//"5751"
    });
  }


  getDetailData(){
    this.navData = this.navParams;
    const id = +this.navData.data.id;
    this.cityId = id;
    this.cityProvider.getDetailCity(id).subscribe(res => {
      this.navData = res;
    });

    // this.cityProvider.getPicture().subscribe(res => {
    //   this.focus = res;
    //   if(res){
    //     this.flag = true;
    //   }
    //   if(this.flag){
    //     console.log(res,'===picture res');
    //   }
    // });

    this.placeName = localStorage.getItem('placeName');
    this.allHistory = JSON.parse(localStorage.getItem('allHistory'));
    console.log(localStorage.getItem('placeName'),'p111111111');
    console.log(this.placeName,'ppppppppppppppp');
    console.log(this.allHistory,typeof(this.allHistory),'kkkkkkkkkkkkkkkkkkkkk');
  }

  search(name:string){
    this.serachProvider.search(this.cityId,name).subscribe(res => {
      this.searchContents = res;
    });
  }
  setHistory(history){
    console.log(history,'===history');
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
    localStorage.setItem('placeName',history.name);
    localStorage.setItem('placeHistory',JSON.stringify(this.historys));
    localStorage.setItem('allHistory',JSON.stringify(this.historyss));
    this.searchContents = [];
    this.navCtrl.push(TabsPage,history);
  }

  getHistory(){
   localStorage.getItem('placeHistory');
  }

  ionViewDidEnter(){
    this.getHistory();
  }

  cleanHistory(){
    this.allHistory = [];
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
