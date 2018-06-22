import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CityProvider} from "../../providers/binone/city";
import {CitydetailPage} from "../cityDetail/citydetail";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  public hotCitys:any = [];
  public groupCitys:any = [];
  public finCity:any = [];

  constructor(public navCtrl: NavController,public cityProvider:CityProvider) {

  }

  ngOnInit(){
    this.showCitys();
    this.hot();
  }

  showCitys(){
    this.cityProvider.getCity('group').subscribe(res => {
      for(var key in res){
          this.groupCitys.push(key);
      }
      this.groupCitys.sort();
      for(let i=0;i<this.groupCitys.length;i++){
        this.finCity.push({'sort':this.groupCitys[i],'cityContents':res[this.groupCitys[i]]})
      }
    });

    console.log(this.finCity,123)
  }

  hot(){
    this.cityProvider.getCity('hot').subscribe(res => {
       this.hotCitys = res;
       console.log(this.hotCitys,555)
    });
  }

  toDetail(detail){
    this.navCtrl.push(CitydetailPage,detail);
  }


}
