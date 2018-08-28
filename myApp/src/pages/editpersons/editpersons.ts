import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home'; 
/**
 * Generated class By kahlaoui Mohamed ghassen
 
 */

@IonicPage()
@Component({
  selector: 'page-editpersons',
  templateUrl: 'editpersons.html',
})
export class EditpersonsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goTmain() {
    this.navCtrl.push(HomePage);
    }

}
