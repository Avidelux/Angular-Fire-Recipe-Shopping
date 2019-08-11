import { Injectable } from '@angular/core';
import { IngredientsService } from './ingredients.service';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  
  constructor( private ingService: IngredientsService ){}

  items = [];


  addItem(ingredient) { // adds a new ingredient to the shopping-cart
    this.items.push(ingredient);
    console.log("Added");
  }

  getItems() {
/*     if(this.items.length != 0){
      this.items.sort(this.compare); // sort the items[]
    } */
    return this.items;
  }

  emptyShoppingCart() {
    this.items = [];
    return this.items;
  }

/// Sorting algorithm, no longer needed for now
/* 
  compare( a, b ) { // compare the category of each ingredient in the shopping cart to sort it
    if ( a.category < b.category ){
      return -1; // a-item comes before b-item
    }
    if ( a.category > b.category ){
      return 1; // a-item comes after b-item
    }
    return 0; // a-item and b-item are the same, don´t change places
  } */



}
