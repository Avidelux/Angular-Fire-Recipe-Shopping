import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from "@angular/router"
import { IngredientsService } from '../ingredients.service';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { IngredientCreationComponent } from '../ingredient-creation/ingredient-creation.component';

@Component({
  selector: 'app-recipe-creation',
  templateUrl: './recipe-creation.component.html',
  styleUrls: ['./recipe-creation.component.css']
})
export class RecipeCreationComponent implements OnInit {

  rec: Recipe;
  ingredientList;
  recipeForm: FormGroup;

  constructor( private recService: RecipeService, private router: Router, private ingService: IngredientsService, private dialog: MatDialog ) { }

  ngOnInit() {
    this.ingredientList = this.ingService.ingredientArray;

    this.recipeForm = new FormGroup({
      name: new FormControl(),
      ingredients: new FormControl(),
      image: new FormControl(),
      steps: new FormControl()
    });

  }

  openDialog(){
    this.dialog.open(IngredientCreationComponent, {width: '35rem', height: '35rem'});
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
    alert("Recipe has been created"); // Alert user that recipe has been created
    this.router.navigate(['/recipe']) // Navigate back to recipe-masterview, once the recipe has been created
  }

}
