import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/HomeScreen";
import WorkoutsScreen from "../screens/WorkoutsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

import ProfileInfoScreen from "../screens/ProfileInfoScreen";
import PasswordResetScreen from "../screens/PasswordResetScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import DarkModeScreen from "../screens/DarkModeScreen";

// function getHeaderTitle(route) {
//   const routeName = getFocusedRouteNameFromRoute(route) ?? "HomeTab";

//   switch (routeName) {
//     case "HomeTab":
//       return "Shreddit";
//     case "Workouts":
//       return "My Workouts";
//     case "Settings":
//       return "Settings";
//   }
// }

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "HomeTab") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Workouts") {
            iconName = focused ? "ios-barbell" : "ios-barbell-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "ios-list-circle" : "ios-list";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#4FB5D3",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Workouts"
        component={WorkoutsStackNavigator}
        options={{ tabBarLabel: "Workouts", tabBarActiveTintColor: "#ACD1AF" }}
      />
      <Tab.Screen
        name="HomeTab"
        component={HomeStackNavigator}
        options={{ tabBarLabel: "Home" }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStackNavigator}
        options={{ tabBarLabel: "Settings", tabBarActiveTintColor: "#808080" }}
      />
    </Tab.Navigator>
  );
};

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        title: "Shreddit",
        headerStyle: { backgroundColor: "#4FB5D3" },
        headerBackVisible: false,
        headerTitleStyle: {
          color: "#fff",
          fontWeight: "bold",
          fontSize: 30,
        },
      }}
    >
      <HomeStack.Screen name="HomePage" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

const WorkoutsStack = createNativeStackNavigator();

const WorkoutsStackNavigator = () => {
  return (
    <WorkoutsStack.Navigator
      screenOptions={{
        title: "My Workouts",
        headerStyle: { backgroundColor: "#ACD1AF" },
        headerBackVisible: false,
        headerTitleStyle: {
          color: "#fff",
          fontWeight: "bold",
          fontSize: 30,
        },
      }}
    >
      <WorkoutsStack.Screen name="WorkoutsPage" component={WorkoutsScreen} />
    </WorkoutsStack.Navigator>
  );
};

const SettingsStack = createNativeStackNavigator();

const SettingsStackNavigator = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        title: "Settings",
        headerStyle: { backgroundColor: "#808080" },
        headerBackVisible: false,
        headerTitleStyle: {
          color: "#fff",
          fontWeight: "bold",
          fontSize: 30,
        },
      }}
    >
      <SettingsStack.Screen name="SettingsPage" component={SettingsScreen} />
      <SettingsStack.Screen
        name="ProfileInfo"
        component={ProfileInfoScreen}
        options={{
          title: "Profile Info",
          headerBackVisible: true,
          headerTintColor: "#fff",
          headerTitleStyle: {
            color: "#fff",
            fontSize: 20,
          },
        }}
      />
      <SettingsStack.Screen
        name="PasswordReset"
        component={PasswordResetScreen}
        options={{
          title: "Change Password",
          headerBackVisible: true,
          headerTintColor: "#fff",
          headerTitleStyle: {
            color: "#fff",
            fontSize: 20,
          },
        }}
      />
      <SettingsStack.Screen
        name="NotificationsPage"
        component={NotificationsScreen}
        options={{
          title: "Notifications",
          headerBackVisible: true,
          headerTintColor: "#fff",
          headerTitleStyle: {
            color: "#fff",
            fontSize: 20,
          },
        }}
      />
      <SettingsStack.Screen name="DarkMode" component={DarkModeScreen} />
    </SettingsStack.Navigator>
  );
};

export default TabBar;
