import { mocks, mockImages } from "../mock"
import camelize from "camelize"

const restaurantsTransform = (restaurants) =>{

  return restaurants.map((restaurant) =>{
    return {
      ...restaurant, 
      photos : [mockImages[Math.floor(Math.random() * mockImages.length)]] ,
      location : restaurant.vicinity,
      isOpenNow : restaurant.openingHours && restaurant.openingHours.openNow
    }
  })
}

export const fetchRestaurants = (location) => {
  return new Promise((resolve, reject) => {
    const mockData = camelize(mocks[location])
    setTimeout(() =>{
      if (mockData){
        resolve(restaurantsTransform(mockData.results));
      }
      else{
        reject("Not Found :( !!")
      }
    }, 3000)
  });
};

