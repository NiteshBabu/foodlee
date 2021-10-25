import React, { useState, useEffect, createContext } from "react";
import { fetchLocation } from "../services/location/location.services";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
	const [keyword, setKeyword] = useState("san francisco");
	const [location, setLocation] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [errors, setErorrs] = useState(null);

	useEffect(() => {
		fetchLocation(keyword)
		.then(data => setLocation(data))
		.catch(e => console.log(e))
	}, [keyword]);

  const onSearch = (searchTerm) =>{
		setKeyword(searchTerm)
	}
	return (
		<LocationContext.Provider
			value={{
				location,
        keyword,
				onSearch,
        isLoading,
        errors
			}}>
			{children}
		</LocationContext.Provider>
	);
};
