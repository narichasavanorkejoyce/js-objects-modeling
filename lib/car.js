const car = {
  make: 'Toyota',
  model: '4Runner',
  releaseYear: 1992,
  mileage: 78062,
  addMileage: function () {
    this.mileage += 50
  }
}
// car.mileage -> 78062
// car.addMileage --> [Function: addMileage]
// car.addMileage() --> executes function to add 50 miles
// car.mileage --> 78112
