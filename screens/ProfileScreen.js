import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";

const ProfileScreen = (props) => {
  return (
    <View>
      <ScrollView>
        <View style={styles.main}></View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  main: {
    padding: 10,
    width: "100%",
    backgroundColor: "#000",
    height: 150,
  },
});
