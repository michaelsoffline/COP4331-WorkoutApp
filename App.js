import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabBar from "./navigation/TabNavigator";
import { StackNavigator } from "./navigation/StackNavigator";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
