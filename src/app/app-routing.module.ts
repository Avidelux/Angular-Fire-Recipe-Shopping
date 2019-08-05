import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeMasterviewComponent } from './recipe-masterview/recipe-masterview.component';
import { RecipeDetailviewComponent } from './recipe-detailview/recipe-detailview.component';
import { EntryComponent } from './entry/entry.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RecipeCreationComponent } from './recipe-creation/recipe-creation.component';

const routes: Routes = [
  {path: '', component: EntryComponent},
  {path: 'recipe/:id', component: RecipeDetailviewComponent},
  {path: 'recipe', component: RecipeMasterviewComponent},
  {path: 'create', component: RecipeCreationComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
