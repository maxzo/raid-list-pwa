import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { Gym } from './gym.model';
import { GymList } from './gym-list';

@Component({
  selector: 'gym-selector',
  templateUrl: 'gym-selector.html'
})
export class GymSelectorComponent {

  searchQuery: string;
  gyms: Gym[];

  @Output() onSelected = new EventEmitter<any>();

  @ViewChild('searchBar') searchBar;

  constructor() {
    this.initializeGyms();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.searchBar.setFocus();
    }, 1200);
  }

  initializeGyms() {
    this.gyms = GymList;
  }

  getGyms(ev: any) {
    // Reset items back to all of the items.
    this.initializeGyms();

    // Set val to the value of the searchbar.
    let val = ev.target.value;

    // If the value is an empty string don't filter the items.
    if (val && val.trim() != '') {
      this.gyms = this.gyms.filter((g) => {
        return (g.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  select(pk: Gym) {
    this.onSelected.emit(pk);
  }

}
