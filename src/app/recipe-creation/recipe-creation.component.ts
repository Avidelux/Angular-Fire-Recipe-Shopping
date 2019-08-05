import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from "@angular/router"

@Component({
  selector: 'app-recipe-creation',
  templateUrl: './recipe-creation.component.html',
  styleUrls: ['./recipe-creation.component.css']
})
export class RecipeCreationComponent implements OnInit {

  rec: Recipe;
  ingredientList;
  recipeForm: FormGroup;
 // ingredientsControl = new FormControl([]);

  constructor( private recService: RecipeService, private router: Router ) { }

  

  ngOnInit() {
    this.ingredientList = this.recService.ingredientArray;

    this.recipeForm = new FormGroup({
      name: new FormControl(),
      ingredients: new FormControl(),
      image: new FormControl(),
      steps: new FormControl()
    });

  }

  submitRecipe(){
    console.log(this.recipeForm.value);
  
    this.rec = {
      id: (this.recService.recipeArray.length+1).toString(),
      name: this.recipeForm.get('name').value,
      products: this.recipeForm.get('ingredients').value,
      image: this.recipeForm.get('image').value,
      steps: [this.recipeForm.get('steps').value]
    }

    this.recService.addRecipe(this.rec);
    /// to do: user-notification on recipe-creation before navigating
    this.router.navigate(['/recipe'])
  }

}
