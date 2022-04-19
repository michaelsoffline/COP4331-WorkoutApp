import React from "react";
import { Text, View, StyleSheet } from "react-native";
import CustomInput from "../components/CustomInput";

const PasswordResetScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Change your password below</Text>
      <View style={styles.inputContainer}>
        <CustomInput placeholder="Enter your email address" label="Email" />
        <CustomInput
          placeholder="Enter your old password"
          label="Old Password"
        />
        <CustomInput
          placeholder="Enter your new password"
          label="New Password"
        />
      </View>
    </View>
  );
};

export default PasswordResetScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    paddingVertical: 50,
  },
  titleText: {
    fontSize: 36,
    color: "black",
    justifyContent: "space-evenly",
  },
  inputContainer: {
    marginVertical: 100,
    width: "100%",
    height: "60%",
  },
});
