import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-recipe-masterview',
  templateUrl: './recipe-masterview.component.html',
  styleUrls: ['./recipe-masterview.component.css']
})
export class RecipeMasterviewComponent implements OnInit {

  recipes: any[];

  constructor( private service: RecipeService, private cartService: ShoppingCartService ) { }

  ngOnInit() {
    this.service.getRecipes().subscribe(element => this.recipes = element);
    this.recipes.forEach(element => {
      if(element.image === null){
        element.image = 'https://via.placeholder.com/650?text=No+image+has+been+defined';
      }
    });
  }

  addRecipe(rec: Recipe){
    this.service.recipeArray.push(rec);
  }

  addToCart(reci:Recipe) {
    reci.products.forEach(element => {
      this.cartService.addItem(element);
    });
  }


}
