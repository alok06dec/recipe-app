import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecepieService {
  recipeChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [];
    /*[new Recipe('Lazania', 'A slice of Pasta ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScH5Dvpt01LRmFtjqkAOZWQeI-vKn26iE8YhT_u3s5WLT_Hs2YuQ',
    [
      new Ingredient('Meat', 1),
      new Ingredient('Cheese', 20)
    ]),
    new Recipe('Waffles', 'A Belgian Delight',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwGeEL6dsNQ4GQQdmdWzrDdrOHIq6h_msEkbu2YZXH0EWK5AUl',
      [
        new Ingredient('Baking Powder', 100),
        new Ingredient('Sugar', 50)
      ])];*/

  getRecipeList() {
    return this.recipes.slice();
  }

  constructor(private slService: ShoppingListService) {}

  addToShoppingList(ingredient: Ingredient[]) {
    this.slService.addIngredients(ingredient);
  }
  getRecipe(id: number) {
    return this.recipes[id];
  }
  addRecipes(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }
  updateRecipes(i: number, recipe: Recipe) {
    this.recipes[i] = recipe;
    this.recipeChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }
}
