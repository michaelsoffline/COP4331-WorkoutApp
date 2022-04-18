import React from "react";
import { StyleSheet, View, Text } from "react-native";
import SettingsComponent from "../components/SettingsComponent";
import { LogBox } from "react-native";
import { useNavigation } from "@react-navigation/native";
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const SettingsScreen = () => {
  const navigation = useNavigation();
  const settingsOptions = [
    {
      title: "Profile Info",
      subTitle: "Update your profile information",
      onPress: () => {
        navigation.navigate("ProfileInfo");
      },
    },
    {
      title: "Password Reset",
      subTitle: "Change your password",
      onPress: () => {
        navigation.navigate("PasswordReset");
      },
    },
    {
      title: "Notifications",
      subTitle: "Change your notification preferences",
      onPress: () => {
        navigation.navigate("NotificationsPage");
      },
    },
    {
      title: "Dark Mode",
      subTitle: "Turn on Dark Mode",
      onPress: () => {},
    },
  ];

  return <SettingsComponent settingsOptions={settingsOptions} />;
};

export default SettingsScreen;
