import React from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/HomeScreen";
import Settings from "../screens/SettingsScreen";
import Profile from "../screens/ProfileScreen";
import Workout from "../screens/WorkoutsScreen";
import Nutrition from "../screens/NutritionScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
