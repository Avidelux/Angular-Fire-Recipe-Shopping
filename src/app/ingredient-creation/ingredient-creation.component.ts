import { Component, OnInit } from '@angular/core';
import { IngredientsService } from '../ingredients.service';
import { Ingredient } from '../ingredient.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ingredient-creation',
  templateUrl: './ingredient-creation.component.html',
  styleUrls: ['./ingredient-creation.component.css']
})
export class IngredientCreationComponent implements OnInit {

  categories;
  ingForm: FormGroup;
  ing: Ingredient;

  constructor( private ingService: IngredientsService ) { }
    
  ngOnInit() {
    this.categories = this.ingService.categories;
    this.ingForm = new FormGroup({
      name: new FormControl(),
      category: new FormControl(),
    });
  }
  
  submitIng(){
    this.ing = {
      name: this.ingForm.get('name').value,
      category: this.ingForm.get('category').value
    }
    this.ingService.addIngredient(this.ing);
    console.log("Success");
    
  }


}
