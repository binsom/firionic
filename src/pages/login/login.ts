import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginProvider} from "../../providers/binone/loginService";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public username:string;
  public password:string;
  public captcha_code:string;
  public codeSrc:string;
  public msg:any={};

  constructor(public navCtrl: NavController, public navParams: NavParams,public loginProvider:LoginProvider) {
  }

  ngOnInit(){

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  // captchas(){
  //   this.loginProvider.captchas().subscribe(res => {
  //     console.log(res)
  //     this.codeSrc = res.code;
  //   });
  // }



  // login(){
  //   this.msg.username = this.username;
  //   this.msg.password = this.password;
  //   this.msg.captcha_code = this.captcha_code;
  //   console.log(typeof(this.captcha_code),'===this.captcha_code');
  //   this.loginProvider.login(this.msg).subscribe(res => {
  //     console.log(res,'点击登录返回的信息')
  //   });
  // }

  login(){
    this.loginProvider.login().subscribe(res=>{
      console.log(res,'请求登录接口')
    });
  }

}
