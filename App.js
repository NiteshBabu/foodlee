import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components/native";
import { Theme } from "./src/infrastructure/theme";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
	useFonts as useOswald,
	Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import { LocationContextProvider } from "./src/context/location.context";
import { FavouritesContextProvider } from "./src/context/favourites.context";
import { RestaurantsContextProvider } from "./src/context/restaurants.context";
import { AccountContextProvider } from "./src/context/account.context";

import { Navigator } from "./src/infrastructure/navigation/app.navigator";
import { SafeContainer } from "./src/components/SafeContainer.component";



export default function App() {
	const [oswaldLoaded] = useOswald({
		Oswald_400Regular,
	});

	const [latoLoaded] = useLato({
		Lato_400Regular,
	});

	if (!latoLoaded || !oswaldLoaded) return null;

	return (
		<ThemeProvider theme={Theme}>
			<LocationContextProvider>
				<AccountContextProvider>
					<FavouritesContextProvider>
						<RestaurantsContextProvider>
							<SafeContainer>
								<Navigator />
							</SafeContainer>
						</RestaurantsContextProvider>
					</FavouritesContextProvider>
				</AccountContextProvider>
			</LocationContextProvider>
			<ExpoStatusBar style='dark' />
		</ThemeProvider>
	);
}
