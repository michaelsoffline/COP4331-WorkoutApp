import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Feather as Icon } from "react-native-vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";

const ProfileInfoScreen = () => {
  return (
    <View style={[styles.mainHeader, { flexDirection: "column" }]}>
      <View style={{ flex: 1, backgroundColor: "#4fb5d3" }} />
      <View style={{ flex: 2, backgroundColor: "white" }} />
      <View style={[styles.profileImageBorder]} />
      <View style={[styles.profileImage]} />
    </View>
  );
};

export default ProfileInfoScreen;

const data = [
  {
    value: "0",
    label: "Male",
  },
  {
    value: "1",
    label: "Female",
  },
];

const styles = StyleSheet.create({
  mainHeader: {
    flex: 1,
  },

  profileImage: {
    width: 88,
    height: 88,
    borderRadius: 88 / 2,
    backgroundColor: "lightgrey",
    position: "absolute",
    marginHorizontal: 150,
    marginVertical: 100,
  },

  profileImageBorder: {
    width: 94,
    height: 94,
    borderRadius: 94 / 2,
    backgroundColor: "#808080",
    position: "absolute",
    marginHorizontal: 147,
    marginVertical: 97,
  },

  genderBtn: {
    marginLeft: 10,
    marginTop: 10,
    alignContent: "center",
    backgroundColor: "white",
  },
});
