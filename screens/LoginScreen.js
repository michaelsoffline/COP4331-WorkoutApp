import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import react from "react-native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Button,
  TextInput,
} from "react-native";

import {
  Alert,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native-web";

function LoginScreen(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    // Main View
    <View style={styles.background}>
      {/* <View style = {styles.colorTop}>
                <View style={styles.smallPadding}></View>
                <Text style={styles.titleText}>Login</Text>
            </View> */}

      <View style={styles.smallPadding}></View>

      <Image
        style={{ height: 200, width: 200 }}
        source={require("../assets/logo.png")}
      />

      <View style={styles.smallPadding}></View>

      <TextInput
        style={styles.input}
        placeholder="Username"
        secureTextEntry={false}
        onChangeText={(newUsername) => setUsername(newUsername)}
        defaultValue={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(newPassword) => setPassword(newPassword)}
        defaultValue={password}
      />

      <View style={styles.loginSquare}>
        <Button
          title="Login"
          color="#fff"
          onPress={() => [console.log(username), console.log(password)]}
        />
      </View>
      <View style={styles.backSquare}>
        <Button title="Back" color="#fff" onPress={() => console.log("Back")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    resizeMode: "contain",
  },
  backSquare: {
    position: "absolute",
    bottom: "7%",
    width: "80%",
    height: "7%",
    backgroundColor: "red",
    justifyContent: "center",
  },
  colorTop: {
    backgroundColor: "#ACD1AF",
    width: "100%",
    height: "15%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: "5%",
    width: "80%",
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  titleText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 30,
  },
  smallPadding: {
    padding: "2%",
  },
  loginSquare: {
    position: "absolute",
    bottom: "15%",
    width: "80%",
    height: "7%",
    backgroundColor: "#ACD1AF",
    justifyContent: "center",
  },
});
export default LoginScreen;
