import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-gym',
  templateUrl: 'gym.html',
})
export class GymPage {

  private callback: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.callback = navParams.get('callback');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GymPage');
  }

  goBack() {
    this.navCtrl.pop();
  }

  onSelected(ev: any) {
    this.callback(ev).then(() => {
      this.navCtrl.pop();
    });
  }

}
