import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  Button,
  TextInput,
  useWindowDimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import CustomInput from "../components/CustomInput";

const NavigateToDetails = (props) => {
  props.navigation.navigate("Home");
};

const LoginScreen = (props) => {
  const { height } = useWindowDimensions();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.root}>
      <Image
        source={"../assets/splash.png"}
        style={(styles.logo, { height: height * 0.3 })}
        resizeMode="contain"
      />
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },

  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 100,
  },
});
