// Ingredient Name & Quantity
const peanuts = {
  name: 'peanuts',
  fridgeInd: true,
  unitMeasure: 'cup',
  quantity: 0.75,
  notes: 'roasted and shelled'
}

const oil = {
  name: 'oil',
  fridgeInd: true,
  unitMeasure: 'tablespoons',
  quantity: 2,
  notes: 'peanut, grapeseed, or corn oil'
}

const onion = {
  name: 'onion',
  fridgeInd: true,
  unitMeasure: 'medium',
  quantity: 1,
  notes: 'red or white, chopped'
}

const ginger = {
  name: 'ginger',
  fridgeInd: true,
  unitMeasure: 'tablespoon',
  quantity: 1,
  notes: 'minced'
}

const garlic = {
  name: 'garlic',
  fridgeInd: true,
  unitMeasure: 'tablespoon',
  quantity: 1,
  notes: 'minced'
}

const chicken = {
  name: 'chicken',
  fridgeInd: true,
  unitMeasure: 'pound',
  quantity: 0.5,
  notes: 'skinless, boneless, cut into chunks'
}

const cayenne = {
  name: 'cayenne',
  fridgeInd: false,
  unitMeasure: 'pinch',
  quantity: 1,
  notes: ''
}

const salt = {
  name: 'salt',
  fridgeInd: true,
  unitMeasure: 'pinch',
  quantity: 1,
  notes: ''
}

const pepper = {
  name: 'black pepper',
  fridgeInd: false,
  unitMeasure: 'pinch',
  quantity: 1,
  notes: ''
}

const stock = {
  name: 'vegetable stock',
  fridgeInd: false,
  unitMeasure: 'cups',
  quantity: 6,
  notes: 'water works as well'
}

const potatoes = {
  name: 'Sweet Potatoes',
  fridgeInd: true,
  unitMeasure: '',
  quantity: 2,
  notes: 'peeled and cut into thick slices'
}

const tomatoes = {
  name: 'tomatoes',
  fridgeInd: true,
  unitMeasure: '',
  quantity: 8,
  notes: 'canned is fine'
}

const kale = {
  name: 'kale',
  fridgeInd: true,
  unitMeasure: 'pound',
  quantity: 0.5,
  notes: 'washed and cut into wide ribbons'
}

const peanutButter = {
  name: 'peanut butter',
  fridgeInd: true,
  unitMeasure: 'cup',
  quantity: 0.5,
  notes: 'chunky or smooth works'
}

const recipe = {
  name: 'West African Peanut Soup With Chicken',
  author: 'Mark Bittman',
  recipeSteps: [
    'Chop peanuts, or crush them with the side of a knife, or pulse them in a food processor to chop roughly',
    'Put oil in a deep skillet or medium saucepan over medium heat; a minute later, add onion, ginger and garlic and cook, stirring occasionally, until onion is soft, 3 to 5 minutes. Add chicken and continue cooking for another 3 or 4 minutes, until just coloring. Add 1/2 cup peanuts and the cayenne and sprinkle with salt and pepper.',
    'Stir in the stock and the sweet potatoes, bring to a boil, and turn heat down to medium-low so the soup bubbles gently. Stir in tomatoes and collards, then cook, stirring occasionally, until chicken is cooked through, about 10 minutes.',
    'Stir in 1/4 cup peanut butter. Taste, adjust seasoning (you may want to add more peanut butter at this point) and serve, garnished with remaining peanuts.'],
  numServings: 4,
  ingredients: [
    peanuts,
    oil,
    onion,
    ginger,
    garlic,
    chicken,
    cayenne,
    salt,
    pepper,
    stock,
    potatoes,
    tomatoes,
    kale,
    peanutButter],
  printRecipe: function () {
    for (let i = 0; i < recipe.ingredients.length; i++) {
      console.log(this.ingredients[i].quantity + ' ' +
      this.ingredients[i].unitMeasure + ' ' + 'of' + ' ' +
      this.ingredients[i].name)
    }
  },
  goShopping: function () {
    for (let i = 0; i < recipe.ingredients.length; i++) {
      if (recipe.ingredients[i].fridgeInd === false) {
        console.log(this.ingredients[i].name)
      }
    }
  }
}
