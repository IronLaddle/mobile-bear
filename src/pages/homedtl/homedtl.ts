import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-homedtl',
  templateUrl: 'homedtl.html',
})
export class HomedtlPage {

  toilets = [
    {
      tlId: 1,
      tlName: 'Tandas Klia 1',
      tlImage: 'http://www.hawkrentacar.com.my/wp-content/uploads/2016/06/OneRepublic-in-Malaysia-Arrive-KLIA-from-Singapore-7824_0.jpg',
      tlLocation : 'KLIA Airport',
      tlPrice : 5,
      tlUsed : 75,
      tlRating : 4.8,
      tlDuration : 1,
      //tlAmenities : {tlA : "wifi",tlA : "wifi",},
      tlDesc : 'Toilet saya ini telah menjadi toilet kegemaran warga KL yang inginkan bersendiririan. Mereka boleh melayari internet secara percuma'
    },
    {
      tlId: 2,
      tlName: 'Tandas Klia 2',
      tlImage: 'https://themangoroad.com/wp-content/uploads/2019/08/klia_2_01-1400x934.jpg',
      tlLocation : 'KLIA 2 Airport',
      tlPrice : 10,
      tlUsed : 175,
      tlRating : 5.0
    },
    {
      tlId: 3,
      tlName: 'Tandas Klia 3',
      tlImage: 'https://themangoroad.com/wp-content/uploads/2019/08/klia_2_01-1400x934.jpg',
      tlLocation : 'KLIA 3 Airport',
      tlPrice : 25,
      tlUsed : 10,
      tlRating : 5.0
    }
  ]

  toiletID : number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.toiletID = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomedtlPage');
  }

}
