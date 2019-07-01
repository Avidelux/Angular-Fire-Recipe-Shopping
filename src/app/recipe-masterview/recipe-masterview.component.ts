import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-masterview',
  templateUrl: './recipe-masterview.component.html',
  styleUrls: ['./recipe-masterview.component.css']
})
export class RecipeMasterviewComponent implements OnInit {

  recipes: any[];

  constructor( private service: RecipeService ) { }

  ngOnInit() {

    this.recipes = this.service.getRecipes()
      
    console.log(this.recipes);
    
    
  }

}
