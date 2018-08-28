import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { EditpersonsPage } from '../pages/editpersons/editpersons';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MapsPage } from '../pages/Maps/Maps';
import  firebase from 'firebase';


var config = {
  apiKey: "AIzaSyCd1DS6o_JTW_PRx6XJ9HKDKFeiRAaWCYQ",
  authDomain: "ionicdb-ca64d.firebaseapp.com",
  databaseURL: "https://ionicdb-ca64d.firebaseio.com",
  projectId: "ionicdb-ca64d",
  storageBucket: "ionicdb-ca64d.appspot.com",
  messagingSenderId: "46582688828"
};




@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage , 
    EditpersonsPage,
    MapsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage, 
    EditpersonsPage , 
    MapsPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
