import React, { useState, useEffect, createContext, useContext } from "react";
import { fetchRestaurants } from "../services/restaurants/restaurants.services";
import { LocationContext } from "./location.context";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider =  ({ children }) => {

  const [restaurants, setRestaurants] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErorrs] = useState(null)

  const {location} = useContext(LocationContext)

  useEffect(() =>{
    if (location){
      setIsLoading(true)
      const locationString = `${location.lat},${location.lng}`  
      fetchRestaurants(locationString)
        .then(data => setRestaurants(data, setIsLoading(false)))
        .catch(err => console.log(err))
    }
  },[location])

  return (
		<RestaurantsContext.Provider
			value={{
				restaurants,
        isLoading,
        errors,
			}}>
			{children}
		</RestaurantsContext.Provider>
	);
};
