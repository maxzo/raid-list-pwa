import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BossPage } from '../boss/boss';
import { GymPage } from '../gym/gym';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  now: Date = new Date();
  go: string = `${this.now.getHours()}:${('0' + this.now.getMinutes()).slice(-2)}`;
  boss: string;

  constructor(public navCtrl: NavController) {

  }

  goToBossPage() {
    const bossPageCallback = (_params) => {
      return new Promise((resolve, reject) => {
          this.boss = _params;
          resolve();
      });
    }
    this.navCtrl.push(BossPage, { callback: bossPageCallback });
  }

  goToGymPage() {
    this.navCtrl.push(GymPage);
  }

}
