import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeMasterviewComponent } from './recipe-masterview/recipe-masterview.component';
import { RecipeDetailviewComponent } from './recipe-detailview/recipe-detailview.component';
import { EntryComponent } from './entry/entry.component';

const routes: Routes = [
  {path: '', component: EntryComponent},
  {path: 'recipe/:id', component: RecipeDetailviewComponent},
  {path: 'recipe', component: RecipeMasterviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
