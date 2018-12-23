import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecepieService} from '../recepie.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  constructor(private recipeService: RecepieService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {

    const recipeId = this.route.snapshot.params['id'];
    this.recipe = this.recipeService.getRecipe(+recipeId);
    this.route.params.subscribe(
      (params: Params) => {
        this.recipe = this.recipeService.getRecipe(+params['id']);
      }
    );
  }

  addToShoppingCart() {
    this.recipeService.addToShoppingList(this.recipe.Ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
  onDelete() {
    this.recipeService.deleteRecipe(+this.route.snapshot.params['id']);
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
