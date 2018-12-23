import {Route, RouterModule} from '@angular/router';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {NgModule} from '@angular/core';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {HomeComponent} from './core/home/home.component';

const routeConst: Route[] = [
  // {path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {path: '', component: HomeComponent },
  // loadChildren here helps in lazy loading of the RecipeComponent
  {path: 'recipes', loadChildren: './recipes/recipe-module#RecipeModule'},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routeConst)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}



