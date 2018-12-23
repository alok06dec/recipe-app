import {RecepieService} from '../recipes/recepie.service';
import {Injectable} from '@angular/core';
import {Recipe} from '../recipes/recipe.model';
import {map} from 'rxjs/operators';
import {HttpClient, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  constructor(private httpClient: HttpClient, private recipeService: RecepieService) {}

  storeRecipe() {
    console.log( this.recipeService.getRecipeList());
   // return this.httpClient.post('http://localhost:8042/recipes', this.recipeService.getRecipeList());
    const req = new HttpRequest('POST', 'http://localhost:8042/recipes', this.recipeService.getRecipeList(),
      {
        reportProgress: true,
      });

    return this.httpClient.request(req);
  }
  getRecipe() {
      return this.httpClient.get<Recipe[]>('http://192.168.0.104:8042/recipes', {observe: 'body', responseType: 'json'})
        .pipe(map(
        (recipes) => {
          for (const rec of recipes) {
            if (!rec['Ingredients']) {
              rec['Ingredients'] = [];
            }
          }
          return recipes;
        }
      )).subscribe(
        (recipes: Recipe[]) => {
          console.log(recipes)
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
