import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/WelcomeScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import RegisterScreen from "./screens/RegisterScreen.js";
import ProfileScreen from "./screens/ProfileScreen.js";
import HomeScreen from "./screens/HomeScreen.js";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Welcome">
        <RootStack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            title: "Register",
            headerTintColor: "#fff",
            headerBackTitleVisible: false,
            headerStyle: { backgroundColor: "#4FB5D3" },
            headerTitleStyle: {
              color: "#fff",
              fontWeight: "bold",
              fontSize: 30,
            },
          }}
        />
        <RootStack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: "Login",
            headerTintColor: "#fff",
            headerBackTitleVisible: false,
            headerStyle: { backgroundColor: "#ACD1AF" },
            headerTitleStyle: {
              color: "#fff",
              fontWeight: "bold",
              fontSize: 30,
            },
          }}
        />
        <RootStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Shreddit",
            headerStyle: { backgroundColor: "#4FB5D3" },
            headerBackVisible: false,
            headerTitleStyle: {
              color: "#fff",
              fontWeight: "bold",
              fontSize: 30,
            },
          }}
        />
        <RootStack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: "Profile",
            headerStyle: { backgroundColor: "#4FB5D3" },
            headerTitleStyle: {
              color: "#fff",
              fontWeight: "bold",
              fontSize: 30,
            },
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
