import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Page1} from "../pages/page1/page1";
import {Page2} from "../pages/page2/page2";
import { BinoneProvider } from '../providers/binone/binone';
import { HttpClientModule } from '@angular/common/http';
import {CityProvider} from "../providers/binone/city";
import {CitydetailPage} from "../pages/cityDetail/citydetail";
import {SerachProvider} from "../providers/binone/serach";
import {FoodProvider} from "../providers/binone/food";
import {FoodPage} from "../pages/food/food";
import { IonicStorageModule } from '@ionic/storage';
import {LoginPage} from "../pages/login/login";
import {LoginProvider} from "../providers/binone/loginService";
import {RestaurantsProvider} from "../providers/binone/restaurants";
import {RestaurantDetailsPage} from "../pages/restaurant-details/restaurant-details";
import {RegisterPage} from "../pages/register/register";
import {RegisterServeProvider} from "../providers/register-serve/register-serve";

// import { HttpModule,JsonpModule } from '@angular/http'; /*数据请求模块*/



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Page1,
    Page2,
    CitydetailPage,
    FoodPage,
    LoginPage,
    RestaurantDetailsPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    // HttpModule,JsonpModule,
    // IonicModule.forRoot(MyApp)
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: 'true', //隐藏全部子页面 tabs
      backButtonText: '返回' /*配置返回按钮*/
    }),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Page1,
    Page2,
    CitydetailPage,
    FoodPage,
    LoginPage,
    RestaurantDetailsPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BinoneProvider,
    HttpClientModule,
    CityProvider,
    SerachProvider,
    FoodProvider,
    Storage,
    LoginProvider,
    RestaurantsProvider,
    RegisterServeProvider
  ]
})
export class AppModule {}
