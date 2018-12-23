import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {RecepieService} from '../recepie.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  id: number;
  recipeEditMode = false;
  recipeForm: FormGroup;
  subscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private recService: RecepieService, private router: Router) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipeEditMode = params['id'] != null;
        this.initForm();
      }
    );
  }
  onSubmit() {
    if (this.recipeEditMode) {
      this.recService.updateRecipes(this.id, this.recipeForm.value);
    } else {
      this.recService.addRecipes(this.recipeForm.value);
    }
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }
  initForm() {
    let recname = '';
    let recpath = '';
    let recdescription = '';
    const recIngredients = new FormArray([]);
    if (this.recipeEditMode) {
      const recipe = this.recService.getRecipe(this.id);
      recname = recipe.Name;
      recpath = recipe.ImagePath;
      recdescription = recipe.Description;
      if (recipe['Ingredients']) {
        for (const ingredent of recipe.Ingredients) {
          recIngredients.push(
            new FormGroup({
              'Name': new FormControl(ingredent.Name, Validators.required),
              'Amount': new FormControl(ingredent.Amount, [Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      'Name': new FormControl(recname, Validators.required),
      'ImagePath': new FormControl(recpath, Validators.required),
      'Description': new FormControl(recdescription, Validators.required),
      'Ingredients': recIngredients
    });
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('Ingredients')).push(
      new FormGroup({
        'Name': new FormControl(null, Validators.required),
        'Amount': new FormControl(null, [Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }
  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('Ingredients')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
