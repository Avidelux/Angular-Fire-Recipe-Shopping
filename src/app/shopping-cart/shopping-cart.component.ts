import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  items;

  constructor( private cartService : ShoppingCartService ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
    
/*  let breadCat = this.items[0];
    let wineCat = this.items[1];
    let vegetablesCat = this.items[2];
    let fishCat = this.items[3];
    let meatCat = this.items[4];
    let otherCat = this.items[5]; */
  }

  


}
