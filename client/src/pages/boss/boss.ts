import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-boss',
  templateUrl: 'boss.html',
})
export class BossPage {

  private callback: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.callback = navParams.get('callback');
  }

  ionViewDidLoad() {
  }

  goBack() {
    this.navCtrl.pop();
  }

  onSelected(ev: any) {
    this.callback(ev.name).then(() => {
      this.navCtrl.pop();
    });
  }

}
