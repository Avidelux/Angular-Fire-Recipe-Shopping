import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Observable, of } from 'rxjs';

const ingredientArray = [ 
  {name:'ingredient1', category: 'bread'},
  {name:'ingredient2', category: 'wine'},
  {name:'ingredient3', category: 'vegetables'},
  {name:'ingredient4', category: 'fish'},
  {name:'ingredient5', category: 'meat'},
  {name:'ingredient6', category: 'bread'},
];

const recipeArray = [ 
    { id:'1', name: 'recipe1', image: 'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=aWyDp3CA', products: [ ingredientArray[0], ingredientArray[3] ] }, 
    { id:'2', name: 'recipe2', image: null, products: [ ingredientArray[1], ingredientArray[2] ] },
    { id:'3', name: 'recipe3', image: 'https://media3.s-nbcnews.com/j/MSNBC/Components/Video/201808/tdy_food_klg_chicken_180828_1920x1080.today-inline-vid-featured-desktop.jpg', products: [ ingredientArray[2], ingredientArray[5] ] },
    { id:'4', name: 'recipe4', image: 'https://www.fivehearthome.com/wp-content/uploads/2014/06/Parmesan-Zucchini-Rounds-2-Ingredients-by-Five-Heart-Home_700pxRecipeCard.jpg', products: [ ingredientArray[3], ingredientArray[4] ] },
    { id:'5', name: 'recipe5', image: 'https://sweetcsdesigns.com/wp-content/uploads/2018/12/Easy-Jumbo-Blueberry-Muffins-Recipe-Picture.jpg', products: [ ingredientArray[4], ingredientArray[0] ] },
    { id:'6', name: 'recipe6', image: null, products: [ ingredientArray[5], ingredientArray[2] ] },
    { id:'7', name: 'recipe7', image: null, products: [ ingredientArray[1], ingredientArray[0] ] }
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
