import {Component, OnDestroy, OnInit} from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];

  constructor(private shoppingList: ShoppingListService) { }
  subscription: Subscription;
  ngOnInit() {
    this.ingredients = this.shoppingList.getIngredient();
    this.subscription = this.shoppingList.ingredientAdded.subscribe(
      (ing: Ingredient[]) => {
           this.ingredients =  ing;
    });
  }
  onEditIngredient(index: number) {
    this.shoppingList.editIngredient.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
