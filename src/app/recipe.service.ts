import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Observable, of } from 'rxjs';

const ingredientArray = ['ingredient1', 'ingredient2', 'ingredient3', 'ingredient4', 'ingredient5', 'ingredient6'];

const recipeArray = [ 
    { id:'1', name: 'recipe1', products: [ ingredientArray[0], ingredientArray[3] ] }, 
    { id:'2', name: 'recipe2', products: [ ingredientArray[1], ingredientArray[2] ] } 
];

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipes(): Observable<Recipe[]>{
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
