import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { RecipeMasterviewComponent } from './recipe-masterview/recipe-masterview.component';
import { RecipeDetailviewComponent } from './recipe-detailview/recipe-detailview.component';
import { AppRoutingModule } from './app-routing.module';
import { EntryComponent } from './entry/entry.component';
import { HeaderComponent } from './header/header.component';
import { IngredientDetailviewComponent } from './ingredient-detailview/ingredient-detailview.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RecipeCreationComponent } from './recipe-creation/recipe-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeMasterviewComponent,
    RecipeDetailviewComponent,
    EntryComponent,
    HeaderComponent,
    IngredientDetailviewComponent,
    ShoppingCartComponent,
    RecipeCreationComponent,
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    AppRoutingModule, // to provide all Angular Material imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
