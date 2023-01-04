// Given the array of cars below, solve the following problems:
// Write a program that returns the car type that is most common in the array
// Vehicle registrations are only valid for 5 years. Write a program that returns a list of all cars that need to renew their registration
// Write a program that returns the car with the largest capacity


let cars = [
  {
    "color": "silver",
    "type": "SUV",
    "registration": new Date('2017-11-17'),
    "capacity": 5
  },
  {
    "color": "purple",
    "type": "minivan",
    "registration": new Date('2017-01-03'),
    "capacity": 7
  },
  {
    "color": "red",
    "type": "station wagon",
    "registration": new Date('2018-03-03'),
    "capacity": 8
  },
  {
    "color": "blue",
    "type": "sedan",
    "registration": new Date('2017-12-2'),
    "capacity": 5
  },
  {
    "color": "green",
    "type": "hatchback",
    "registration": new Date('2019-07-09'),
    "capacity": 5
  },
  {
    "color": "black",
    "type": "covertible",
    "registration": new Date('2019-08-13'),
    "capacity": 5
  }
]

// Write a program that returns the car type that is most common in the array

const mostCommonCarType = (cars)=>{
  const carTypes = {}

  for (let car of cars) {
    carTypes[car["type"]] ? carTypes[car["type"]] += 1 : 
    carTypes[car["type"]] = 1
  }

  const carTypeCount = Object.values(carTypes)
  const maxCount = Math.max(...carTypeCount)
  const mostCommonCar = []

  // console.log(maxCount)
  for (let key in carTypes) {
    if (carTypes[key] === maxCount) {
      mostCommonCar.push(key)
    
    }
  }
  // console.log(mostCommonCar)
  return mostCommonCar;
  

}
console.log(mostCommonCarType(cars))

console.log("=======================================")
console.log("=======================================")

/*=========================================================================================
 Vehicle registrations are only valid for 5 years. Write a program that returns a list of all cars that need to renew their registration.
  ======================================================================================*/


const renewRegistration = (cars) => {

  const renew = cars.filter((car) => {
    const registrationDate = car["registration"]
    const timestamp = new Date().getTime() - registrationDate.getTime()
    const date = new Date(timestamp);
    const yearsDiff = Math.abs(date.getUTCFullYear() - 1970);

    if (yearsDiff >= 5) {
      return car
    }
    
  })
  return renew
}

console.log("List of cars that need to renew their registration: ")
console.log(renewRegistration(cars))


console.log("=======================================")
console.log("=======================================")
/*=========================================================================================
 Write a program that returns the car with the largest capacity
 =======================================================================================*/

const maxCapacity = () => {
  const maxCapacity = Math.max(...cars.map(car => car.capacity));
  const carWithMaxCapacity = cars.filter(car => car["capacity"] === maxCapacity)
  return carWithMaxCapacity;
}

console.log("List of car with maximum capacity is :")
console.log(maxCapacity(cars));