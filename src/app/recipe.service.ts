import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeObservable = [ { id:'1', name: 'recipe1', products: ['product1', 'product2'] }, 
                       { id:'2', name: 'recipe2', products: ['product2', 'product3'] } 
                      ]
  constructor() { }

  getRecipes(){
    return this.recipeObservable;
  }

}
