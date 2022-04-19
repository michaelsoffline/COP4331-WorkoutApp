import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Feather as Icon } from "react-native-vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import CustomInput from "../components/CustomInput";
import { ButtonGroup } from "@rneui/base";
import { Button } from "react-native-web";

const ProfileInfoScreen = () => {
  const [username, setUsername] = useState("@Username");
  const theUserName = "@Username";
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View style={[styles.mainHeader, { flexDirection: "column" }]}>
      <View style={{ flex: 1, backgroundColor: "#4fb5d3" }} />
      <View style={[styles.profileImageBorder]} />
      <View style={[styles.profileImage]} />
      <Text style={styles.usernameLabel}>{theUserName}</Text>
      <View style={{ marginVertical: 200 }}>
        <CustomInput placeholder="Enter your first name" label="First Name" />
        <CustomInput placeholder="Enter your last name" label="Last Name" />
        <CustomInput placeholder="Enter your username" label="Username" />
      </View>
      <View style={{ backgroundColor: "#fff", marginVertical: 5 }}>
        <ButtonGroup
          buttons={["Male", "Female"]}
          selectedIndex={selectedIndex}
          onPress={(value) => {
            setSelectedIndex(value);
          }}
          containerStyle={{ marginBottom: 20, marginTop: 20 }}
          selectedButtonStyle={{ backgroundColor: "#4fb5d3" }}
        />
      </View>
    </View>
  );
};

export default ProfileInfoScreen;

const styles = StyleSheet.create({
  mainHeader: {
    position: "absolute",
    width: "100%",
    height: "30%",
    backgroundColor: "#4fb5d3",
  },

  usernameLabel: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    position: "absolute",
    marginHorizontal: 110,
    marginVertical: 150,
    width: "50%",
    justifyContent: "space-evenly",
  },

  profileImage: {
    width: 88,
    height: 88,
    borderRadius: 88 / 2,
    backgroundColor: "lightgrey",
    position: "absolute",
    marginHorizontal: 150,
    marginVertical: 50,
  },

  profileImageBorder: {
    width: 94,
    height: 94,
    borderRadius: 94 / 2,
    backgroundColor: "#808080",
    position: "absolute",
    marginHorizontal: 147,
    marginVertical: 47,
  },
});
