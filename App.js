import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";

import Welcome from "./screens/Welcome";
import Pins from "./screens/Pins";
import Pindetailts from "./screens/Pindetailts";
import Createpin from "./screens/Createpin";


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const Stack = createStackNavigator();


export default function App() {
  const [loaded] = useFonts({
    RobotoLight: require("./assets/fonts/Roboto-Light.ttf"),
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoThin: require("./assets/fonts/Roboto-Thin.ttf"),

  });

  if (!loaded) return null;



  return (
    <NavigationContainer theme={theme}>
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


