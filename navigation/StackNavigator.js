import React from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabBar from "./TabNavigator";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeStackNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={TabBar}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const WelcomeStack = createNativeStackNavigator();

const WelcomeStackNavigator = () => {
  return (
    <WelcomeStack.Navigator>
      <WelcomeStack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <WelcomeStack.Screen
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
      <WelcomeStack.Screen
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
    </WelcomeStack.Navigator>
  );
};

// const SettingsStack = createNativeStackNavigator();

// const SettingsStackNavigator = () => {
//   return (
//     <SettingsStack.Navigator>
//       <SettingsStack.Screen name="ProfileInfo" component={ProfileInfoScreen} />
//       <SettingsStack.Screen
//         name="PasswordReset"
//         component={PasswordResetScreen}
//       />
//       <SettingsStack.Screen
//         name="Notifications"
//         component={NotificationsScreen}
//       />
//       <SettingsStack.Screen name="DarkMode" component={DarkModeScreen} />
//     </SettingsStack.Navigator>
//   );
// };

export { StackNavigator };
