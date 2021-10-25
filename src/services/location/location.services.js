import { locations } from "./locations.mock";
import camelize from "camelize";

const locationTransform = (locationJson) =>{
  const transformedLocation = camelize(locationJson[0])
  const {location, viewport} = transformedLocation.geometry
  const {lat, lng} = location

  return {lat, lng, viewport}
}

export const fetchLocation = (locationKeyword) => {
  const location = locations[locationKeyword.toLowerCase()]
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      if (!location){
        reject("Not Found :( !!")
      }
      else{
        resolve(locationTransform(location.results))
      }
    }, 2000);
  })
};
