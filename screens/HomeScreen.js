import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  LogBox,
  AsyncStorage,
} from "react-native";
import axios from "axios";
import tokenStorage from "../tokenStorage.js"
LogBox.ignoreAllLogs();

function HomeScreen(props) {

  var ud = AsyncStorage.getItem('user_data');
  //var ud = JSON.parse(_ud);

  const [sessions, setSessions] = useState([]);

  var bp = require("../components/Path");

  var obj = {
    "userID": ud.userId,
    "jwtToken": tokenStorage.retrieveToken()
  };

  var js = JSON.stringify(obj);

  var config = bp.apiCall("api/displaySessions", js);

  useEffect(() => {
      
    axios(config).then(function (response) {

      var res = response.data;
      setSessions(res.sessions);

    }).catch(function (error) {
      console.log(error);
    });

  }, []);

  return (
    <ScrollView contentContainderStyle={styles.container}>
      <Text style={styles.titleText}>Recently Completed Workouts:</Text>
      <View style={styles.smallPadding}></View>

      {sessions.map((item) => {
        return (
          <View key={item.key} style={styles.mainRect}>
            <TouchableOpacity
              style={styles.exerciseRectangle}
              title={item.name}
              activeOpacity={0.5}
            >
              <View style={styles.contentView}>
                <Text style={styles.item}>{item.sessionName}</Text>
                <Text style={styles.date}>
                  Date Completed: {item.updatedAt}
                </Text>
              </View>
            </TouchableOpacity>
            <View style={styles.smallPadding}></View>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    alignContent: "center",
    paddingTop: StatusBar.currentHeight, // Might need to change for the navigation view
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 24,
    paddingTop: 60,
    paddingLeft: 20,
  },
  item: {
    paddingLeft: "8%",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  date: {
    fontSize: 18,
    color: "white",
  },
  mainRect: {
    alignSelf: "center",
  },
  exerciseRectangle: {
    backgroundColor: "#4E5861",
    height: 100,
    width: 380,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  smallPadding: {
    padding: "2%",
  },
  addButton: {
    height: 40,
    width: 40,
    position: "relative",
    right: 17,
  },
});

export default HomeScreen;
