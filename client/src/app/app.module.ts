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
import { PokemonSelectorComponent } from '../components/pokemon-selector/pokemon-selector';
import { GymSelectorComponent } from '../components/gym-selector/gym-selector';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BossPage,
    GymPage,
    PokemonSelectorComponent,
    GymSelectorComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ClipboardModule
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
