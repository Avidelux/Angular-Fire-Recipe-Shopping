import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  items = [
    {name:'mock-ingredient-1', category: 'bread'},
    {name:'mock-ingredient-2', category: 'fish'},
    {name:'mock-ingredient-3', category: 'meat'},
  ];

  firstAdd = true;

  addItem(ingredient) {
    if(this.firstAdd == true){
      this.items = this.emptyShoppingCart();
      this.firstAdd = false;
    }
    this.items.push(ingredient);    
  }

  getItems() {
    this.items.sort(this.compare); // sort the items[]
  //  var categoryArray = this.groupByCategory(this.items);
    return this.items;
  }

  emptyShoppingCart() {
    this.items = [];
    return this.items;
  }

  compare( a, b ) { // compare the name of each ingredient in the shopping cart to sort it
    if ( a.name < b.name ){
      return -1; // a-item comes before b-item
    }
    if ( a.name > b.name ){
      return 1; // a-item comes after b-item
    }
    return 0; // a-item and b-item are the same, don´t change places
  }

/*   groupByCategory(inputArray: any[]){ // create 2-dim array with each category and each ingredient of that category inside the category-array
    var catArray;
    //var counterArray;
    for (let i = 0; i < inputArray.length; i++) {
      switch (inputArray[i].category) {
        case 'bread':
          if(catArray[0].includes(inputArray[i].name)){
            //counterArray[0] += 1;
          }else{
            catArray[0].push(inputArray[i]);
          }
        break;
        case 'wine':
            if(catArray[1].includes(inputArray[i].name)){
              //counterArray[1] += 1;
            }else{
              catArray[1].push(inputArray[i]);
            }
        break;
        case 'vegetables':
            if(catArray[2].includes(inputArray[i].name)){
              //counterArray[2] += 1;
            }else{
              catArray[2].push(inputArray[i]);
            }
        break;
        case 'fish':
            if(catArray[3].includes(inputArray[i].name)){
              //counterArray[3] += 1;
            }else{
              catArray[3].push(inputArray[i]);
            }
        break;
        case 'meat':
            if(catArray[4].includes(inputArray[i].name)){
              //counterArray[4] += 1;
            }else{
              catArray[4].push(inputArray[i]);
            }
        break;
        case 'other':
            if(catArray[5].includes(inputArray[i].name)){
              //counterArray[5] += 1;
            }else{
              catArray[5].push(inputArray[i]);
            }
        break;
      }
    }
    return catArray; 

    

  }*/

}
