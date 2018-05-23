import { NgModule } from '@angular/core';
import { PokemonSelectorComponent } from './pokemon-selector/pokemon-selector';
import { GymSelectorComponent } from './gym-selector/gym-selector';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [PokemonSelectorComponent,
    GymSelectorComponent],
	imports: [IonicModule],
	exports: [PokemonSelectorComponent,
    GymSelectorComponent]
})
export class ComponentsModule {}
