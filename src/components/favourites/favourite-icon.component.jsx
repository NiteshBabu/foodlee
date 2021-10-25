import React, { useContext } from "react"
import styled from "styled-components/native"
import { Entypo } from "@expo/vector-icons"
import { FavouritesContext } from "../../context/favourites.context"

const FavouriteIconContainer = styled.View`
  position : absolute;
  top : 10px;
  right : 10px;
  z-index : 900;
  `
  
const HeartIconPressable = styled.TouchableOpacity`
    padding : 10px;
`

export const FavouriteIcon = ({restaurant}) => {
  
  const { favouritesList, addToFavourites, removeFromFavourites} = useContext(FavouritesContext)
  const isFavourite = favouritesList.find(rest => rest.placeId == restaurant.placeId)
  
  const icon = isFavourite ? 
    <Entypo name="heart" size={30} color="crimson" /> : 
    <Entypo name="heart-outlined" size={30} color="white" />
  return (
    <FavouriteIconContainer>
      <HeartIconPressable
        onPress={() =>isFavourite ? removeFromFavourites(restaurant) : addToFavourites(restaurant) }
      >
        {icon}
      </HeartIconPressable>
    </FavouriteIconContainer>
  )
}