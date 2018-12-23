import {Ingredient} from '../shared/ingredient.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export  class ShoppingListService {
  private  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  //   ingredientAdded = new  EventEmitter<Ingredient[]>(); - another better way to emit using Subject from rxjs
  ingredientAdded = new  Subject<Ingredient[]>();
  editIngredient = new Subject<number>();
  getIngredient() {
    return this.ingredients.slice();
  }
  getIngredientByIndex(index: number): Ingredient {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.next(this.ingredients.slice());
  }
  addIngredients(ingredient: Ingredient[]) {
    this.ingredients.push(...ingredient);
    this.ingredientAdded.next(this.ingredients.slice());
  }
  updateIngredient(index: number, ingredient: Ingredient ) {
    this.ingredients[index] = ingredient;
    this.ingredientAdded.next(this.ingredients.slice());
  }
  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientAdded.next(this.ingredients.slice());
  }
}
