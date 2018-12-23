import { Component, OnInit } from '@angular/core';
import {DataStoreService} from '../shared/data-store-service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: []
})
export class RecipesComponent implements OnInit {
  constructor(private dsService: DataStoreService) {}
  ngOnInit() {
    this.dsService.getRecipe();
  }

}
