import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { RecipeMasterviewComponent } from './recipe-masterview/recipe-masterview.component';
import { RecipeDetailviewComponent } from './recipe-detailview/recipe-detailview.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RecipeMasterviewComponent,
    RecipeDetailviewComponent
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
