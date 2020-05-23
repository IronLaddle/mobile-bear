import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WalletPage } from '../wallet/wallet';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  topupWlt(id:number){
    this.navCtrl.push(WalletPage)
  }

}
