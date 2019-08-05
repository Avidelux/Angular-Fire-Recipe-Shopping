import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root'
})

export class IngredientsService {

  constructor() { }

  categories =['bread', 'wine', 'vegetables', 'fish', 'meat', 'other']; // categories are pre-defined and do not change!

  ingredientArray = [ 
    {name:'ingredient bread another', category: this.categories[0]},
    {name:'ingredient wine', category: this.categories[1]},
    {name:'ingredient veggies', category: this.categories[2]},
    {name:'ingredient fish', category: this.categories[3]},
    {name:'ingredient meat', category: this.categories[4]},
    {name:'ingredient bread', category: this.categories[0]},
  ];

  addIngredient(ing: Ingredient){
    this.ingredientArray.push(ing);
  }

}
