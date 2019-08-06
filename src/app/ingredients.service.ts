import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root'
})

export class IngredientsService {

  constructor() { }

  categories =['bread', 'wine', 'vegetables', 'fish', 'meat', 'other']; // categories are pre-defined and do not change!

  units = ['gramm', 'liter', 'bottle'];

  ingredientArray = [ 
    {name:'ingredient bread another', category: this.categories[0], unit: this.units[0], amount: 5},
    {name:'ingredient wine', category: this.categories[1], unit: this.units[2], amount: 6},
    {name:'ingredient veggies', category: this.categories[2], unit: this.units[1], amount: 1},
    {name:'ingredient fish', category: this.categories[3], unit: this.units[0], amount: 1500},
    {name:'ingredient meat', category: this.categories[4], unit: this.units[0], amount: 500},
    {name:'ingredient bread', category: this.categories[0], unit: this.units[0], amount: 25},
  ];

  addIngredient(ing: Ingredient){
    this.ingredientArray.push(ing);
  }

}
