import React, { useState, useEffect, createContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
	const [favouritesList, setFavouritesList] = useState([]);
  const [isShown, setIsShown] = useState(false)

  const addToFavourites = (restaurant) =>{
    setFavouritesList([...favouritesList, restaurant])
  }

  const removeFromFavourites = (restaurant) =>{
    setFavouritesList(favouritesList.filter(rest => rest.placeId != restaurant.placeId))
  }

  const toggleFavouritesList = () =>{
      setIsShown(!isShown)
  }

  const storeData = async (data) =>{
    try{
      const JsonData = JSON.stringify(data)
      await AsyncStorage.setItem("@favourites", JsonData) 
    }
    catch (e){
      console.log(e);
    }
  }

  const getData = async () =>{
    try{
      const data = await AsyncStorage.getItem("@favourites")
      if (data){
        setFavouritesList(JSON.parse(data))
      }
    }
    catch (e){
      console.log(e)
    }
  }

  useEffect(() =>{
    storeData(favouritesList)
  }, [favouritesList])
 
  useEffect(() =>{
    getData()
  }, [])

	return (
		<FavouritesContext.Provider
			value={{
				favouritesList,
        isShown,
        addToFavourites,
        removeFromFavourites,
        toggleFavouritesList
			}}>
			{children}
		</FavouritesContext.Provider>
	);
};
