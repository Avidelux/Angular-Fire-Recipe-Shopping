import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeMasterviewComponent } from './recipe-masterview/recipe-masterview.component';
import { RecipeDetailviewComponent } from './recipe-detailview/recipe-detailview.component';

const routes: Routes = [
  {path: '', component: RecipeMasterviewComponent},
  {path: 'recipe/:id', component: RecipeDetailviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
