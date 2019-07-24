import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Observable, of } from 'rxjs';

const recipeArray = [ { id:'1', name: 'recipe1', products: ['product1', 'product2'] }, 
      { id:'2', name: 'recipe2', products: ['product2', 'product3'] } 
]

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  

  constructor() { }

  getRecipes(): Observable<Recipe []>{
    return of(recipeArray);
  }

  getByID(id: string): Recipe{
    recipeArray.forEach(element => {
      if(element.id == id){
        console.log(element.id);
        console.log(element);
        
        return element as Recipe;
      }
    });
    return null;
  }

}
