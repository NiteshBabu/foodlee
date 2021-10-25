import React, { useContext } from "react"
import { useNavigation } from "@react-navigation/core"
import { TouchableOpacity } from "react-native"
import styled from "styled-components/native"
import { FavouritesContext } from "../../context/favourites.context"
import MiniRestaurantInfo from "../mini-restaurant-info/mini-restaurant-info.component"

const FavouritesWrapper = styled.ScrollView`
  margin : ${(props) => props.theme.spaces[1]};
`
const FavouritesContainer = styled.View`
  padding : ${(props) => props.theme.spaces[0]};
`
export const Favourites = () => {
  const navigation = useNavigation()
  const { favouritesList=[] } = useContext(FavouritesContext)
  return (
    <FavouritesWrapper horizontal showsHorizontalScrollIndicator={false}>
      {
        favouritesList.map((restaurant) => (
          <TouchableOpacity
            key={restaurant.placeId}
            onPress={() => navigation.navigate("RestaurantDetails", { restaurant })}
          >

            <FavouritesContainer>
              <MiniRestaurantInfo restaurant={restaurant} />
            </FavouritesContainer>
          </TouchableOpacity>
        )
        )
      }
    </FavouritesWrapper>
  )
}

  // {
  //   (function (rows, i=0, len){
  //     if (restaurants.length > 0){
  //       while(i <= len){
  //         rows.push(<FavouritesContainer>
  //           <MiniRestaurantInfo restaurant={restaurants[1]}/>
  //         </FavouritesContainer> 
  //         )
  //         i++
  //       }
  //       return rows
  //     }
  //   })([], 0, 10)
  // }