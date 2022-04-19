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
import {recentlyCompleted} from '../workouts.js';
LogBox.ignoreAllLogs();

function HomeScreen(props) {



  const [completed, setCompleted] = useState(recentlyCompleted);

    return(
        <ScrollView contentContainderStyle={styles.container}>

            <Text style={styles.titleText}>Recently Completed Workouts:</Text>
            <View style={styles.smallPadding}></View>

            {completed.map((item) => {
                return(
                    <View key={item.key} style={styles.mainRect}>

                        <TouchableOpacity style={styles.exerciseRectangle} title={item.name} activeOpacity={0.5} onPress={() => console.log("Go to " + item.name + " screen.")}>
                            <View style={styles.contentView}>
                                <Text style={styles.item}>{item.name}</Text>
                                <Text style={styles.date}>Date Completed: {item.dateCompleted}</Text>
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
