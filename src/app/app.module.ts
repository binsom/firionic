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
    FoodPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
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
    FoodPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BinoneProvider,
    HttpClientModule,
    CityProvider,
    SerachProvider,
    FoodProvider
  ]
})
export class AppModule {}
