import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomedtlPage } from '../homedtl/homedtl';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  toilets = [
    {
      tlId: 1,
      tlName: 'Tandas Klia 1',
      tlImage: 'http://www.hawkrentacar.com.my/wp-content/uploads/2016/06/OneRepublic-in-Malaysia-Arrive-KLIA-from-Singapore-7824_0.jpg',
      tlLocation : 'KLIA Airport',
      tlPrice : 5,
      tlUsed : 75,
      tlRating : 4.8
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

  constructor(public navCtrl: NavController, public data: DataProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad home');
    this.data.testData().subscribe(res => {
      console.log(res)
    })
  }

  toiletDtl(tlDtl:number){
    this.navCtrl.push(HomedtlPage, { data: tlDtl });
  }

  

}
