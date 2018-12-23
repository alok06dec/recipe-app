import {Ingredient} from '../shared/ingredient.model';

export class Recipe {
  public Name: string;
  public Description: string;
  public ImagePath: string;
  public Ingredients: Ingredient[];
  public VideoUrl: string;
  constructor(name: string, desc: string, path: string, ingredients: Ingredient[]) {
    this.Name = name;
    this.Description = desc;
    this.ImagePath = path;
    this.Ingredients = ingredients;
  }
}
