import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { MapScreen } from "../../features/map/screens/map.screen";
import { Text } from "../../components/typography/text.component";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { AccountContext } from "../../context/account.context";
import { AccountNavigator } from "./account.navigator";
import LoadingIcon from "../../components/LoadingIcon";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
	restaurants: "md-fast-food",
	map: "md-map",
	settings: "md-settings",
};

const tabBarIcon =
	(iconName) =>
	({ size, color, focused }) =>
		(
			<Ionicons
				name={focused ? iconName : `${iconName}-outline`}
				size={size}
				color={color}
			/>
		);

const screenOptions = ({ route }) => {
	let iconName = TAB_ICON[route.name];
	return {
		tabBarIcon: tabBarIcon(iconName),
		tabBarActiveTintColor: "tomato",
		tabBarInactiveTintColor: "tomato",
		headerShown : false
	};
};
export const Navigator = () => {

	const  {user, isAuthenticated, isLoading} = useContext(AccountContext)
	if (isLoading) return <LoadingIcon />
	console.log(isAuthenticated)
	return (
		<NavigationContainer>
			{
				isAuthenticated ?
				<Tab.Navigator screenOptions={screenOptions}>
				<Tab.Screen name='restaurants' component={RestaurantsNavigator} />
				<Tab.Screen
					name='map'
					// options={{ tabBarBadge: "100" }}
          component={MapScreen}
					/>
				<Tab.Screen name='settings' children={() => <Text>Settings</Text>} />
			</Tab.Navigator> :
			<AccountNavigator />
			}
		</NavigationContainer>
	);
};
