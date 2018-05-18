import { NgModule } from '@angular/core';
import { PokemonSelectorComponent } from './pokemon-selector/pokemon-selector';
import { GymSelectorComponent } from './gym-selector/gym-selector';
@NgModule({
	declarations: [PokemonSelectorComponent,
    GymSelectorComponent],
	imports: [],
	exports: [PokemonSelectorComponent,
    GymSelectorComponent]
})
export class ComponentsModule {}
