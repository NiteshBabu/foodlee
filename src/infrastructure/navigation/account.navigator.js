import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import MainScreen from "../../features/account/screens/main.screen"

const Stack = createStackNavigator()

export const AccountNavigator = () =>{
  return(
    <Stack.Navigator
      screenOptions={{headerShown : false}}
    >
      <Stack.Screen name="Main" component={MainScreen} />
      {/* <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} /> */}
    </Stack.Navigator>
  )
}