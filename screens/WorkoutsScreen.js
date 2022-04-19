import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import {listWorkouts} from '../workouts.js';
import axios from "axios";



function WorkoutsScreen(props) {

    const [workout, setWorkouts] = useState(listWorkouts);

    return(

        <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.smallPadding}></View>
        <View style={styles.smallPadding}></View>
        <View style={styles.smallPadding}></View>
      {workout.map((item) => {
        return(
          <View key={item.key}>

            <TouchableOpacity style={styles.exerciseRectangle} title={item.name} activeOpacity={0.5} onPress={() => console.log("Go to " + item.name + " screen")}>
                <View style={styles.contentView}>
                  <Text style={styles.item}>{item.name}</Text>
                  <TouchableOpacity 
                    style={styles.addButton} 
                    onPress={() => console.log("Added " + item.name)}
                  >
                    <Image source={require("../assets/AddButton.png")} style={styles.addButton}/> 
                  </TouchableOpacity>
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
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      alignContent: 'center',
      paddingTop: StatusBar.currentHeight // Might need to change for the navigation view
    },
    item: {
      paddingLeft: "8%",
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
      width: "100%",
      height: "100%",
      
    },
    exerciseRectangle: {
      backgroundColor: "#4E5861",
      height: 100,
      width: 380,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      borderRadius: 20,
    },
    smallPadding: {
      padding: "2%"
    },
    contentView: {
      flexDirection: "row",
    },
    addButton: {
      height: 40,
      width: 40,
      position: 'relative',
      right: 17,
    }
  
  });

  export default WorkoutsScreen;
