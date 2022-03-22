import React from "react";
import { StyleSheet, Text, View, Button, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const NavigateToDetails = (props) => {
  props.navigation.navigate("Login");
};

const LaunchScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>LaunchScreen</Text>
      <Button title="Click Me!" onPress={() => NavigateToDetails(props)} />
    </View>
  );
};

export default LaunchScreen;

const { height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
