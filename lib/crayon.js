// Define the crayon
// new Object() is another way to create an object
const crayon = new Object()

// Define traits of a crayon
crayon.color = 'blue'
crayon.lengthInCM = 8

// Define a behavior of a crayon (it gets used up)
crayon.getUsedUp = function () {
  crayon.lengthInCM -= 0.5
}
