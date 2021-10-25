import React, { createContext, useState, useEffect } from "react";
import { fetchUser } from "../services/account/account.services";

export const AccountContext = createContext();

export const AccountContextProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [errors, setErrors] = useState(null);
	const [user, setUser] = useState(null);

	useEffect(() => {
    setIsLoading(true)
		fetchUser("nitesh@foodle.com", "nitesh123")
    .then((user) => {
      if (user){
        console.log(user, "..........")
        setUser(user);
        setIsAuthenticated(true);
      }
      setIsLoading(false)
    })
    .catch((e) => {
      console.log(e);
      setErrors(e)
      setIsLoading(false)
			});
	}, []);

	return (
		<AccountContext.Provider
			value={{
				isAuthenticated,
        user,
        isLoading,
        errors
			}}>
			{children}
		</AccountContext.Provider>
	);
};
