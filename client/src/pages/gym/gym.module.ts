import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GymPage } from './gym';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    GymPage,
  ],
  imports: [
    IonicPageModule.forChild(GymPage),
    ComponentsModule
  ],
})
export class GymPageModule {}
