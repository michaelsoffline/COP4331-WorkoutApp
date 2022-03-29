import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/WelcomeScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import RegisterScreen from "./screens/RegisterScreen.js";

const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <RegisterScreen />
    // <NavigationContainer>
    //   <RootStack.Navigator initialRouteName="Launch">
    //     <RootStack.Screen name="Launch" component={LaunchScreen} />
    //     <RootStack.Screen name="Login" component={LoginScreen} />
    //     <RootStack.Screen name="Home" component={HomeScreen} />
    //   </RootStack.Navigator>
    // </NavigationContainer>
  );
}
