import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";

import Welcome from "./screens/Welcome";
import Pins from "./screens/Pins";
import Pindetailts from "./screens/Pindetailts";
import Createpin from "./screens/Createpin";



const Stack = createStackNavigator();


const App = () => {
 
 

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Welcome"
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Pins" component={Pins} />
        <Stack.Screen name="Pindetailts" component={Pindetailts} />
        <Stack.Screen name="Createpin" component={Createpin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


