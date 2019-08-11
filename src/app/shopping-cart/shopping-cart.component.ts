import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { IngredientsService } from '../ingredients.service';
import { Ingredient } from '../ingredient.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  items;
  categories;
  distinctItems = [];
  ing:Ingredient;


  constructor( private cartService : ShoppingCartService, private ingService: IngredientsService ) {  }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.categories = this.ingService.categories; // grabs the categories to display each ingredient according to the categories
    console.log(this.items);
    this.createDistinct();
  }

  createDistinct(){
    this.distinctItems = [];
    /// create a new object array for each distinct value of items AND an increasing amount assigned to each entry which will increase per "duplicate" in items
    if(this.items != null){
      this.items.forEach(element => {
        if (this.distinctItems.some(e => (e.name === element.name)&&(e.category === element.category)&&(e.unit === element.unit) ) ) {
          /* distinctItems contains the element "e" looked for */
          var index = this.distinctItems.findIndex(e => (e.name === element.name)&&(e.category === element.category)&&(e.unit === element.unit) )
          this.distinctItems[index].amount += element.amount;
        }else{ // create a new ingredient with similar attributes to avoid "call-by-reference"
          this.ing = new Ingredient();
          this.ing.name = element.name;
          this.ing.category = element.category;
          this.ing.unit = element.unit;
          this.ing.amount = element.amount;
          this.distinctItems.push(this.ing);
        }
      });
    }
  }

  
}