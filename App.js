import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackNavigator } from "./components/RootStackNavigator.js";
import HomeScreen from "./screens/HomeScreen.js";
import SettingsScreen from "./screens/SettingsScreen.js";

export default function App() {
  return <RootStackNavigator />;
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Home" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}
