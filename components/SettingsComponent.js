import React from "react";
import { View, Text, ScrollView, StyleSheet, Button } from "react-native";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import CustomButton from "./CustomButton";
import { useNavigation } from "@react-navigation/native";
import { CommonActions } from "@react-navigation/native";

const SettingsComponent = ({ settingsOptions }) => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      {settingsOptions.map(({ title, subTitle, onPress }) => (
        <TouchableOpacity key={title} onPress={onPress}>
          <View style={styles.tableView}>
            <Text style={styles.titleStyle}>{title}</Text>
            {subTitle && <Text style={styles.subTitleStyle}>{subTitle}</Text>}
          </View>

          <View style={{ height: 0.5, backgroundColor: "grey" }} />
        </TouchableOpacity>
      ))}
      <CustomButton
        logout
        title="Logout"
        loading={false}
        disabled={false}
        style={styles.logoutButton}
        onPress={() =>
          navigation.dispatch((state) => {
            const params = state.routes[state.routes.length - 1].params;

            return CommonActions.reset({
              index: 1,
              routes: [{ name: "Welcome", params }],
            });
          })
        }
      />
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

  logoutButton: {
    height: 70,
    paddingHorizontal: 5,
    marginVertical: 60,
    marginHorizontal: 55,
    borderRadius: 15,
    width: "70%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default SettingsComponent;
