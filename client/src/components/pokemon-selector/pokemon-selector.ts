import { Component, Output, EventEmitter } from '@angular/core';
import { Pokemon } from './pokemon.model';

@Component({
  selector: 'pokemon-selector',
  templateUrl: 'pokemon-selector.html'
})
export class PokemonSelectorComponent {

  searchQuery: string;
  pokemons: Pokemon[];

  @Output() onSelected = new EventEmitter<any>();

  constructor() {
    this.initializePokemons();
  }

  initializePokemons() {
    this.pokemons = [
      { name: 'Abra' },
      { name: 'Absol' },
      { name: 'Aerodactyl' }
    ];
  }

  getPokemons(ev: any) {
    // Reset items back to all of the items.
    this.initializePokemons();

    // Set val to the value of the searchbar.
    let val = ev.target.value;

    // If the value is an empty string don't filter the items.
    if (val && val.trim() != '') {
      this.pokemons = this.pokemons.filter((pk) => {
        return (pk.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  select(pk: Pokemon) {
    this.onSelected.emit(pk);
  }

}
