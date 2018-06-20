import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CityProvider} from "../../providers/binone/city";

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
      // console.log(res,'数据')
      for(var key in res){
          this.groupCitys.push(key);
      }
      this.groupCitys.sort();
      for(let i=0;i<this.groupCitys.length;i++){
        this.finCity.push({'sort':this.groupCitys[i],'cont':res[this.groupCitys[i]]})
      }
    });
  }

  hot(){
    this.cityProvider.getCity('hot').subscribe(res => {
       this.hotCitys = res;
    });
  }

}
