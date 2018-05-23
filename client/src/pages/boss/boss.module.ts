import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BossPage } from './boss';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    BossPage,
  ],
  imports: [
    IonicPageModule.forChild(BossPage),
    ComponentsModule
  ],
})
export class BossPageModule {}
