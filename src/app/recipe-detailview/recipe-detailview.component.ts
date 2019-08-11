import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-recipe-detailview',
  templateUrl: './recipe-detailview.component.html',
  styleUrls: ['./recipe-detailview.component.css']
})
export class RecipeDetailviewComponent implements OnInit {

  recipeID;
  recipe:Recipe[];
  reci:Recipe;

  constructor( private recService: RecipeService, private route: ActivatedRoute, private cartService: ShoppingCartService ) { }

  ngOnInit() {
    this.getID();
    this.recService.getRecipes().subscribe(element => this.recipe = element); //get observable from recipe-service
    this.reci = this.recipe[(this.recipeID-1)]; //pulls out just the recipe that is needed 
    if(this.reci.image === null){ //sets a placeholder-image if no image is defined
      this.reci.image = 'https://via.placeholder.com/600x450?text=No+image+has+been+defined';
    }
  }

  getID(){ // grabs the ID from the URL
    this.recipeID = this.route.snapshot.paramMap.get('id'); 
  }

  addToCart() { // adds each ingredient of the recipe to the shopping-cart
    this.reci.products.forEach(element => {
      this.cartService.addItem(element);
    });
  }

}
