import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import react, { Pressable } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Button,
  TextInput,
} from "react-native";

import CustomButton from "../components/CustomButton";

import {
  Alert,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native-web";

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

  function isEmpty(str) {
    return !str.trim().length;
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    // Main View
    <View style={styles.background}>
      <View style={styles.smallPadding}></View>

      <Image
        style={{ height: 200, width: 200 }}
        source={require("../assets/logo.png")}
      />

      <View style={styles.smallPadding}></View>

      <TextInput
        style={styles.input}
        placeholder="Email"
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

      <View style={{ marginHorizontal: 30 }}>
        <CustomButton
          secondary
          title="Login"
          loading={false}
          disabled={false}
          onPress={async () => {
            try {
              const loginCredentials = { email: username, password: password };
              var stringifyCreds = JSON.stringify(loginCredentials);

              const response = await fetch(
                "https://shreddit-ucf.herokuapp.com/api/login",
                {
                  method: "POST",
                  body: stringifyCreds,
                  headers: { "Content-Type": "application/json" },
                }
              );

              if (response.status == 200) {
                navigation.navigate("Home");
              } else {
                navigation.navigate("Login");
              }
            } catch (error) {
              console.log("ERROR HERE");
            }
          }}
          style={styles.loginButton}
        />
      </View>
      <View>
        <Button
          color="#6980dd"
          title="Forgot Password?"
          onPress={() => navigation.navigate("ForgotPassword")}
        />
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
  input: {
    height: "5%",
    width: "80%",
    margin: 10,
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
    marginVertical: "10%",
  },
  loginButton: {
    height: 60,
    paddingHorizontal: 5,
    marginVertical: 20,
    left: 2,
    marginHorizontal: 35,
    borderRadius: 15,
    width: 200,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  forgotPasswordBtn: {
    color: "#9300ff",
    fontSize: 10,
  },
});
export default LoginScreen;
