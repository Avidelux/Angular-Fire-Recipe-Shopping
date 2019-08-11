import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Observable, of } from 'rxjs';
import { IngredientsService } from './ingredients.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
  constructor( private ingService: IngredientsService ) { }

  recipeArray = [ // mock-data of recipes
    { 
      id:'1', 
      name: 'recipe1', 
      image: 'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=aWyDp3CA', 
      products: [ this.ingService.ingredientArray[0], this.ingService.ingredientArray[3], this.ingService.ingredientArray[4], this.ingService.ingredientArray[2] ],
      steps: [
        "Zutaten schälen und Säuber", "Die Paprika bei 250° köcheln lassen", "Nach ca. 10 Minuten können Sie das Angebrante vom Herd entfernen", "Rufen Sie ca. 20 Minuten nach Beginn den Lieferservice an und bestellen sich eine Pizza", "Je nach Lieferservice sollte nach 20-30 Minuten ihre Bestellung angekommen sein. Nun nur noch schön anrichten und genießen!"
      ]
    }, 
    { 
      id:'2', 
      name: 'recipe2', 
      image: null, 
      products: [ this.ingService.ingredientArray[1], this.ingService.ingredientArray[2] ],
      steps: [
        "Zutaten schälen und Säuber", "Die Paprika bei 250° köcheln lassen", "Nach ca. 10 Minuten können Sie das Angebrante vom Herd entfernen", "Rufen Sie ca. 20 Minuten nach Beginn den Lieferservice an und bestellen sich eine Pizza", "Je nach Lieferservice sollte nach 20-30 Minuten ihre Bestellung angekommen sein. Nun nur noch schön anrichten und genießen!"
      ]
    },
    { id:'3', 
      name: 'recipe3',
      image: 'https://media3.s-nbcnews.com/j/MSNBC/Components/Video/201808/tdy_food_klg_chicken_180828_1920x1080.today-inline-vid-featured-desktop.jpg', 
      products: [ this.ingService.ingredientArray[2], this.ingService.ingredientArray[5] ],
      steps: [
        "Zutaten schälen und Säuber", "Die Paprika bei 250° köcheln lassen", "Nach ca. 10 Minuten können Sie das Angebrante vom Herd entfernen", "Rufen Sie ca. 20 Minuten nach Beginn den Lieferservice an und bestellen sich eine Pizza", "Je nach Lieferservice sollte nach 20-30 Minuten ihre Bestellung angekommen sein. Nun nur noch schön anrichten und genießen!"
      ]
    },
    { 
      id:'4', 
      name: 'recipe4', 
      image: 'https://www.fivehearthome.com/wp-content/uploads/2014/06/Parmesan-Zucchini-Rounds-2-Ingredients-by-Five-Heart-Home_700pxRecipeCard.jpg', 
      products: [ this.ingService.ingredientArray[3], this.ingService.ingredientArray[4] ],
      steps: [
        "Zutaten schälen und Säuber", "Die Paprika bei 250° köcheln lassen", "Nach ca. 10 Minuten können Sie das Angebrante vom Herd entfernen", "Rufen Sie ca. 20 Minuten nach Beginn den Lieferservice an und bestellen sich eine Pizza", "Je nach Lieferservice sollte nach 20-30 Minuten ihre Bestellung angekommen sein. Nun nur noch schön anrichten und genießen!"
      ]
    },
    { 
      id:'5', 
      name: 'recipe5', 
      image: 'https://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1537826115/lemony-greek-chicken-soup-1811-p16.jpg?itok=H9Vjmwxd', 
      products: [ this.ingService.ingredientArray[4], this.ingService.ingredientArray[0] ],
      steps: [
        "Zutaten schälen und Säuber", "Die Paprika bei 250° köcheln lassen", "Nach ca. 10 Minuten können Sie das Angebrante vom Herd entfernen", "Rufen Sie ca. 20 Minuten nach Beginn den Lieferservice an und bestellen sich eine Pizza", "Je nach Lieferservice sollte nach 20-30 Minuten ihre Bestellung angekommen sein. Nun nur noch schön anrichten und genießen!"
      ]
    },
    { 
      id:'6', 
      name: 'recipe6', 
      image: null, 
      products: [ this.ingService.ingredientArray[5], this.ingService.ingredientArray[2] ],
      steps: []
    },
    { 
      id:'7', 
      name: 'recipe7', 
      image: null, 
      products: [ this.ingService.ingredientArray[1], this.ingService.ingredientArray[0] ],
      steps: [
        "Zutaten schälen und Säuber", "Die Paprika bei 250° köcheln lassen", "Nach ca. 10 Minuten können Sie das Angebrante vom Herd entfernen", "Rufen Sie ca. 20 Minuten nach Beginn den Lieferservice an und bestellen sich eine Pizza", "Je nach Lieferservice sollte nach 20-30 Minuten ihre Bestellung angekommen sein. Nun nur noch schön anrichten und genießen!"
      ]
    }
  ];

  getRecipes(): Observable<Recipe[]>{
    return of(this.recipeArray); // returns an observable 
  }

  addRecipe(inputRecipe: Recipe){ // adds a new recipe
    this.recipeArray.push(inputRecipe);
    console.log("Added" + this.recipeArray);
  }

}
