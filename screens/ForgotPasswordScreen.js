import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const ForgotPasswordScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Forgot your Password?</Text>
      <Text style={styles.subtitleText}>
        No problem! Enter your email address below and we'll send you an email
        to reset your password
      </Text>
      <View style={styles.inputContainer}>
        <CustomInput placeholder="Email Address" />
        <CustomButton
          pwdrecovery
          title="Submit"
          loading={false}
          disabled={false}
          onPress={() => {}}
          style={styles.submitBtn}
        />
      </View>
      <Image
        style={styles.footerImage}
        source={require("../assets/padlock3.png")}
      ></Image>
    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    paddingVertical: 50,
  },

  inputContainer: {
    marginVertical: 20,
    width: "100%",
    height: "60%",
  },

  titleText: {
    marginHorizontal: 50,
    fontSize: 36,
    color: "black",
  },

  subtitleText: {
    fontSize: 20,
    color: "#808080",
    justifyContent: "space-evenly",
    marginTop: 30,
  },

  submitBtn: {
    width: "35%",
    marginHorizontal: 200,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 10,
  },

  footerImage: {
    bottom: 225,
    width: 200,
    height: 200,
  },
});
