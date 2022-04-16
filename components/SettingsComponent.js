import React from "react";
import { View, Text, ScrollView, StyleSheet, Button } from "react-native";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import CustomButton from "./CustomButton";

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
      <CustomButton danger title="Logout" loading={false} disabled={false} />
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
});

export default SettingsComponent;
