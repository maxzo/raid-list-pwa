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

  constructor(public navCtrl: NavController) {

  }

  goToBossPage() {
    this.navCtrl.push(BossPage);
  }

  goToGymPage() {
    this.navCtrl.push(GymPage);
  }

}
