/* Matrikelnummer: 9679885 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog'; //somehow needs to be imported and declared here instead of in the app-material-module


import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { RecipeMasterviewComponent } from './recipe-masterview/recipe-masterview.component';
import { RecipeDetailviewComponent } from './recipe-detailview/recipe-detailview.component';
import { AppRoutingModule } from './app-routing.module';
import { EntryComponent } from './entry/entry.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RecipeCreationComponent } from './recipe-creation/recipe-creation.component';
import { IngredientCreationComponent } from './ingredient-creation/ingredient-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeMasterviewComponent,
    RecipeDetailviewComponent,
    EntryComponent,
    HeaderComponent,
    ShoppingCartComponent,
    RecipeCreationComponent,
    IngredientCreationComponent,
  ],
  imports: [
    BrowserModule,
    AppMaterialModule, // to provide all Angular Material imports
    AppRoutingModule, 
    MatDialogModule
  ],
  entryComponents: [IngredientCreationComponent],
  providers: [
    { provide: MatDialogModule, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
