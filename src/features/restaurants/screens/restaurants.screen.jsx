import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { RestaurantsContext } from "../../../context/restaurants.context";
import { RestaurantInfo } from "../components/restaurant-info.component";
import { Search } from "../../../components/Search/Search.component";
import LoadingIcon from "../../../components/LoadingIcon";
import { Text } from "../../../components/typography/text.component";
import { Favourites } from "../../../components/favourites/favourites.component";
import { FavouritesContext } from "../../../context/favourites.context";

const RestaurantInfoContainer = styled.SafeAreaView`
  flex: 1;
`

export const RestaurantsScreen = ({ navigation }) => {
	const { restaurants, isLoading, errors } = useContext(RestaurantsContext)
	const { isShown } = useContext(FavouritesContext)
	if (isLoading) return <LoadingIcon />
	return (
		<RestaurantInfoContainer>
			<Search />
			{
				isShown && <Favourites />
			}
			<FlatList
				data={restaurants}
				renderItem={({ item, index, separators }) => {
					return (
						<TouchableOpacity onPress={() => navigation.navigate("RestaurantDetails", {restaurant : item})}>
							<RestaurantInfo restaurant={item} />
						</TouchableOpacity>
					)
				}}
				keyExtractor={(item, index) => item.name + item.place_id + index}
				contentContainerStyle={{ padding: 10 }}
			/>
		</RestaurantInfoContainer>
	)
}


