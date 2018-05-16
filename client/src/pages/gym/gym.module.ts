import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GymPage } from './gym';

@NgModule({
  declarations: [
    GymPage,
  ],
  imports: [
    IonicPageModule.forChild(GymPage),
  ],
})
export class GymPageModule {}
