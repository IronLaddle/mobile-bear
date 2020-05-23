import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { BookingPage } from '../booking/booking';
import { ProfilePage } from '../profile/profile';


@Component({
  selector: 'page-footer',
  templateUrl: 'footer.html',
})
export class FooterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FooterPage');
  }

  homePage(){
    this.navCtrl.setRoot(HomePage);
  }

  bookPage(){
    this.navCtrl.setRoot(BookingPage);
  }

  profilePage(){
    this.navCtrl.setRoot(ProfilePage);
  }

}
