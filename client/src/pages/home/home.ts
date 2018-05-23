import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { BossPage } from '../boss/boss';
import { GymPage } from '../gym/gym';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  now: Date = new Date();
  go: string = `${this.now.getHours()}:${('0' + this.now.getMinutes()).slice(-2)}`;
  doneText: string = 'Aceptar';
  cancelText: string = 'Cancelar';
  boss: string = '';
  gym: any;
  fullList: boolean = false;
  raidList: string = '';

  constructor(public navCtrl: NavController, private toastCtrl: ToastController) {
  }

  goToBossPage() {
    const bossPageCallback = (_params) => {
      return new Promise((resolve, reject) => {
          this.boss = _params;
          this.refreshList();
          resolve();
      });
    }
    this.navCtrl.push(BossPage, { callback: bossPageCallback });
  }

  goToGymPage() {
    const gymPageCallback = (_params) => {
      return new Promise((resolve, reject) => {
          this.gym = _params;
          this.refreshList();
          resolve();
      });
    }
    this.navCtrl.push(GymPage, { callback: gymPageCallback });
  }

  refreshList() {
    if (this.gym) {
      this.raidList = "*" + this.boss.toUpperCase() + " - " + this.gym.name + " - " + this.go.replace(/^0/, '') + " hs.*\nCoordenadas: " + this.gym.coordenates;
      if (this.gym.address) {
        this.raidList += "\nDirección: " + this.gym.address;
      }
      this.raidList += "\n\n1. \n2. \n3. \n4. \n5. \n6. \n7. \n8. \n9. \n10. ";
    } else {
      this.raidList = "*" + this.boss.toUpperCase() + " -  - " + this.go.replace(/^0/, '') + " hs.*\n\n1. \n2. \n3. \n4. \n5. \n6. \n7. \n8. \n9. \n10. ";
    }

    if (this.fullList) {
      this.raidList += "\n11. \n12. \n13. \n14. \n15. \n16. \n17. \n18. \n19. \n20. ";
    }
  }

  onParamChange(ev: any) {
    this.refreshList();
  }

  copySuccess() {
    let toast = this.toastCtrl.create({
      message: 'Copiado',
      duration: 1000,
      position: 'top'
    });

    toast.present();
  }

}
