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
    
    /// to-do: redundancy of recipe[] with recipe-masterview, fix!
  }

  getID(){
    this.recipeID = this.route.snapshot.paramMap.get('id'); // grabs the ID from the URL , ---! maybe rework later when two ids are in the URL !---
      // subscribe to the url -> to do
  }

  addToCart() {
    this.reci.products.forEach(element => {
      this.cartService.addItem(element);
    });
  }





  getRecipeFromService(){
    
    
    /*
    if(this.recipeID != null){
      console.log(this.service.getByID(this.recipeID));
      var returnValue = this.service.getByID(this.recipeID);
      console.log(returnValue);
      
      this.recipe.name = returnValue.name;
    }else{ // recipeID == null ; launch getID() again to recieve, then same method again
      this.getID();
      setTimeout( () => { this.getRecipeFromService() }, 2000); // wait 2 seconds before trying again
    }
    */
  }

}
