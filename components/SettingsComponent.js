import React from "react";
import { View, Text, ScrollView, StyleSheet, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const SettingsComponent = ({ settingsOptions, navigation }) => {
  return (
    <ScrollView>
      {settingsOptions.map(({ title, subTitle, onPress }) => (
        <TouchableOpacity key={title}>
          <View style={styles.tableView}>
            <Text style={styles.titleStyle}>{title}</Text>
            {subTitle && <Text style={styles.subTitleStyle}>{subTitle}</Text>}
          </View>

          <View style={{ height: 0.5, backgroundColor: "grey" }} />
        </TouchableOpacity>
      ))}
      <View style={styles.buttonStyle}>
        <Button
          title="Logout"
          color="white"
          onPress={() => console.log("Logout")}
        ></Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tableView: {
    paddingHorizontal: 28,
    paddingBottom: 28,
    paddingTop: 28,
  },

  titleStyle: {
    fontSize: 22,
  },

  subTitleStyle: {
    fontSize: 19,
    opacity: 0.6,
    paddingTop: 15,
  },

  buttonStyle: {
    marginTop: 525,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "grey",
    position: "absolute",
    paddingHorizontal: 15,
    paddingBottom: 15,
    paddingTop: 15,
    alignItems: "center",
    width: "90%",
    height: "15%",
    borderRadius: 25,
  },
});

export default SettingsComponent;
