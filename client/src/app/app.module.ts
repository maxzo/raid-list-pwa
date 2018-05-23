import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ClipboardModule } from 'ngx-clipboard';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BossPage } from '../pages/boss/boss';
import { GymPage } from '../pages/gym/gym';
import { BossPageModule } from '../pages/boss/boss.module';
import { GymPageModule } from '../pages/gym/gym.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ClipboardModule,
    BossPageModule,
    GymPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BossPage,
    GymPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
