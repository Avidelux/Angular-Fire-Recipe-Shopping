import { Component, OnInit } from '@angular/core';
import { IngredientsService } from '../ingredients.service';
import { Ingredient } from '../ingredient.model';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-ingredient-creation',
  templateUrl: './ingredient-creation.component.html',
  styleUrls: ['./ingredient-creation.component.css']
})
export class IngredientCreationComponent implements OnInit {

  categories;
  units;
  ingForm: FormGroup;
  ing: Ingredient;

  constructor( private ingService: IngredientsService, private dialogRef:MatDialogRef<IngredientCreationComponent> ) { }
    
  ngOnInit() {

    this.categories = this.ingService.categories;
    this.units = this.ingService.units;
    
    this.ingForm = new FormGroup({
      name: new FormControl(),
      category: new FormControl(),
      unit: new FormControl(),
      amount: new FormControl(),
    });
    
  }
  
  submitIng(){
    this.ing = {
      name: this.ingForm.get('name').value,
      category: this.ingForm.get('category').value,
      unit: this.ingForm.get('unit').value,
      amount: this.ingForm.get('amount').value
    }
    this.ingService.addIngredient(this.ing);
    this.dialogRef.close(); //close dialog window after submittion
  }


}
