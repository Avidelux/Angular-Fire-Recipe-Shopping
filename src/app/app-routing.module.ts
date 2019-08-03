import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeMasterviewComponent } from './recipe-masterview/recipe-masterview.component';
import { RecipeDetailviewComponent } from './recipe-detailview/recipe-detailview.component';
import { EntryComponent } from './entry/entry.component';
import { IngredientDetailviewComponent } from './ingredient-detailview/ingredient-detailview.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path: '', component: EntryComponent},
  {path: 'recipe/:id', component: RecipeDetailviewComponent},
  {path: 'recipe', component: RecipeMasterviewComponent},
  {path: 'ingredient/:id', component: IngredientDetailviewComponent, outlet: 'ingredientView'}, // idea with modal popup for ingredients
  {path: 'shopping-cart', component: ShoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
