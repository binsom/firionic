import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CityProvider} from "../../providers/binone/city";
import {SerachProvider} from "../../providers/binone/serach";

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
  constructor(public navCtrl: NavController, public navParams: NavParams,public cityProvider:CityProvider,public serachProvider:SerachProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CitydetailPage');
  }
  ngOnInit(){
    this.navData = this.navParams;
    // console.log(this.navData.data.name);
    this.getDetailData();
  }

  getDetailData(){
    const id = +this.navData.data.id;
    this.cityProvider.getDetailCity(id).subscribe(res => {
      this.navData = res;
      console.log(this.navData)
    });
  }


  search(){
    // const ID = +this.navData.data.id;
    // keyword:string =
    this.serachProvider.search(1,'迪士尼').subscribe(res => {
      console.log(res)
    });
  }


}
