import {Component} from '@angular/core';
import {DataStoreService} from '../../shared/data-store-service';

@Component ({
  selector : 'app-header',
  templateUrl : './header.component.html'
  }
)
export class HeaderComponent {
  isIn = false;
  constructor(private dataStore: DataStoreService) {}
  onSaveData() {
    this.dataStore.storeRecipe().subscribe(
      (response) => console.log(response)
    );
    this.toggleState();
  }
  onFetch() {
    this.dataStore.getRecipe();
    this.toggleState();
  }

 toggleState() {
    this.isIn = !this.isIn;
  }
}
