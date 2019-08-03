import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Observable, of } from 'rxjs';

const categories =['bread', 'wine', 'vegetables', 'fish', 'meat', 'other']; // categories are pre-defined and do not change!

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  ingredientArray = [ 
    {name:'ingredient bread another', category: categories[0]},
    {name:'ingredient wine', category: categories[1]},
    {name:'ingredient veggies', category: categories[2]},
    {name:'ingredient fish', category: categories[3]},
    {name:'ingredient meat', category: categories[4]},
    {name:'ingredient bread', category: categories[0]},
  ];
  
  recipeArray = [ 
    { 
      id:'1', 
      name: 'recipe1', 
      image: 'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=aWyDp3CA', 
      products: [ this.ingredientArray[0], this.ingredientArray[3], this.ingredientArray[4], this.ingredientArray[2] ],
      steps: [
        "Zutaten schälen und Säuber", "Die Paprika bei 250° köcheln lassen", "Nach ca. 10 Minuten können Sie das Angebrante vom Herd entfernen", "Rufen Sie ca. 20 Minuten nach Beginn den Lieferservice an und bestellen sich eine Pizza", "Je nach Lieferservice sollte nach 20-30 Minuten ihre Bestellung angekommen sein. Nun nur noch schön anrichten und genießen!"
      ]
    }, 
    { 
      id:'2', 
      name: 'recipe2', 
      image: null, 
      products: [ this.ingredientArray[1], this.ingredientArray[2] ],
      steps: [
        "Zutaten schälen und Säuber", "Die Paprika bei 250° köcheln lassen", "Nach ca. 10 Minuten können Sie das Angebrante vom Herd entfernen", "Rufen Sie ca. 20 Minuten nach Beginn den Lieferservice an und bestellen sich eine Pizza", "Je nach Lieferservice sollte nach 20-30 Minuten ihre Bestellung angekommen sein. Nun nur noch schön anrichten und genießen!"
      ]
    },
    { id:'3', 
      name: 'recipe3',
      image: 'https://media3.s-nbcnews.com/j/MSNBC/Components/Video/201808/tdy_food_klg_chicken_180828_1920x1080.today-inline-vid-featured-desktop.jpg', 
      products: [ this.ingredientArray[2], this.ingredientArray[5] ],
      steps: [
        "Zutaten schälen und Säuber", "Die Paprika bei 250° köcheln lassen", "Nach ca. 10 Minuten können Sie das Angebrante vom Herd entfernen", "Rufen Sie ca. 20 Minuten nach Beginn den Lieferservice an und bestellen sich eine Pizza", "Je nach Lieferservice sollte nach 20-30 Minuten ihre Bestellung angekommen sein. Nun nur noch schön anrichten und genießen!"
      ]
    },
    { 
      id:'4', 
      name: 'recipe4', 
      image: 'https://www.fivehearthome.com/wp-content/uploads/2014/06/Parmesan-Zucchini-Rounds-2-Ingredients-by-Five-Heart-Home_700pxRecipeCard.jpg', 
      products: [ this.ingredientArray[3], this.ingredientArray[4] ],
      steps: [
        "Zutaten schälen und Säuber", "Die Paprika bei 250° köcheln lassen", "Nach ca. 10 Minuten können Sie das Angebrante vom Herd entfernen", "Rufen Sie ca. 20 Minuten nach Beginn den Lieferservice an und bestellen sich eine Pizza", "Je nach Lieferservice sollte nach 20-30 Minuten ihre Bestellung angekommen sein. Nun nur noch schön anrichten und genießen!"
      ]
    },
    { 
      id:'5', 
      name: 'recipe5', 
      image: 'https://sweetcsdesigns.com/wp-content/uploads/2018/12/Easy-Jumbo-Blueberry-Muffins-Recipe-Picture.jpg', 
      products: [ this.ingredientArray[4], this.ingredientArray[0] ],
      steps: [
        "Zutaten schälen und Säuber", "Die Paprika bei 250° köcheln lassen", "Nach ca. 10 Minuten können Sie das Angebrante vom Herd entfernen", "Rufen Sie ca. 20 Minuten nach Beginn den Lieferservice an und bestellen sich eine Pizza", "Je nach Lieferservice sollte nach 20-30 Minuten ihre Bestellung angekommen sein. Nun nur noch schön anrichten und genießen!"
      ]
    },
    { 
      id:'6', 
      name: 'recipe6', 
      image: null, 
      products: [ this.ingredientArray[5], this.ingredientArray[2] ],
      steps: []
    },
    { 
      id:'7', 
      name: 'recipe7', 
      image: null, 
      products: [ this.ingredientArray[1], this.ingredientArray[0] ],
      steps: [
        "Zutaten schälen und Säuber", "Die Paprika bei 250° köcheln lassen", "Nach ca. 10 Minuten können Sie das Angebrante vom Herd entfernen", "Rufen Sie ca. 20 Minuten nach Beginn den Lieferservice an und bestellen sich eine Pizza", "Je nach Lieferservice sollte nach 20-30 Minuten ihre Bestellung angekommen sein. Nun nur noch schön anrichten und genießen!"
      ]
    }
  ];

  constructor() { }

  getRecipes(): Observable<Recipe[]>{
    return of(this.recipeArray);
  }

  getByID(id: string): Recipe{
    this.recipeArray.forEach(element => {
      if(element.id == id){
        console.log(element.id);
        console.log(element);
        
        return element as Recipe;
      }
    });
    return null;
  }

}
