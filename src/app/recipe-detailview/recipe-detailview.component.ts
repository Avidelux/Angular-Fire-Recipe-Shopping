import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detailview',
  templateUrl: './recipe-detailview.component.html',
  styleUrls: ['./recipe-detailview.component.css']
})
export class RecipeDetailviewComponent implements OnInit {

  recipeID;
  recipe:Recipe[];

  constructor( private service: RecipeService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.getID();
    this.service.getRecipes().subscribe(element => this.recipe = element); //get observable from recipe-service
   
  }

  getID(){
    this.recipeID = this.route.snapshot.paramMap.get('id'); // grabs the ID from the URL , ---! maybe rework later when two ids are in the URL !---
      // subscribe to the url -> to do

    console.log(this.recipeID);
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
