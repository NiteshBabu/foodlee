import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import RestaurantDetails from "../../features/restaurants/screens/restaurants-details.screen";

const RestaurantsStack = createStackNavigator();

export const RestaurantsNavigator = () => {
	return (
		<RestaurantsStack.Navigator 
			screenOptions={{headerShown : false}}
		>
			<RestaurantsStack.Screen
				name='RestaurantsStack'
				component={RestaurantsScreen}
			/>
			<RestaurantsStack.Screen
				name='RestaurantDetails'
				component={RestaurantDetails}
			/>
		</RestaurantsStack.Navigator>
	);
};
