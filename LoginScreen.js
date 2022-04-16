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

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import axios from "axios";

var loginInfo = {};

function LoginScreen({ navigation }) {
  var bp = require("../components/Path");
  // var storage = require("../tokenStorage.js");

  var loginEmail, loginPassword;

  const [message, setMessage] = useState("");

  const attemptLogin = async (event) => {
    event.preventDefault();

    var loginInfo = {
      email: loginEmail.value,
      password: loginPassword.value,
    };

    var js = JSON.stringify(loginInfo);

    var config = {
      method: "POST",
      url: bp.buildPath("api/login"),

      headers: {
        "Content-Type": "application/json",
      },

      data: js,
    };

    axios(config)
      .then(function (response) {
        var res = response.data;

        if (res.error) {
          setMessage("Invalid email or password");
        } else {
          // storage.storeToken(res);
          // var jwt = require("jsonwebtoken");

          // var ud = jwt.decode(storage.retrieveToken(), {
          //   complete: true
          // });

          // var userId = ud.payload.userId;
          // var firstName = ud.payload.firstName;
          // var lastName = ud.payload.lastName;

          // var user = {
          //   firstName: firstName,
          //   lastName: lastName,
          //   id: userId
          // };

          // localStorage.setItem("user_data", JSON.stringify(user));

          window.location.href = "/dashboard";
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
          onPress = {async () => {
            try {
              const loginCredentials = {email: username, password: password};
              var stringifyCreds = JSON.stringify(loginCredentials);

              const response = await fetch('https://shreddit-ucf.herokuapp.com/api/login', {method: 'POST', body: stringifyCreds, headers: {'Content-Type': 'application/json'}});

              console.log(response);

              var responseRes = JSON.parse(await response.text());

              console.log(responseRes);

              if(responseRes.error == "No account belongs to that email.") {
                console.log("Invalid Login Credentials");
              }
              else if(responseRes.error == "Account is not verified, please check email for verification email") {
                console.log("Please verify your email");
              }
              else {
                navigation.navigate("Home");
              }
            } catch(error) {
              console.log("ERROR HERE");
            }
          }} 
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
