import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing-module';
import {FormsModule} from '@angular/forms';
import {RecepieService} from './recipes/recepie.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {SharedModule} from './shared/shared.module';
import {ShoppingModule} from './shopping-list/shopping-module';
import {CoreModule} from './core/core.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    ShoppingModule,
    CoreModule
  ],
  providers: [RecepieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
