import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../assets/colors";

const CustomButton = ({
  title,
  secondary,
  primary,
  danger,
  logout,
  disabled,
  loading,
  onPress,
  style,
}) => {
  const getBackgroundColor = () => {
    if (disabled) {
      return colors.grey;
    }
    if (primary) {
      return colors.primary;
    }
    if (danger) {
      return colors.danger;
    }
    if (secondary) {
      return colors.secondary;
    }
    if (logout) {
      return colors.grey;
    }
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[{ backgroundColor: getBackgroundColor() }, style]}
    >
      <View style={[styles.loaderSection]}>
        {loading && (
          <ActivityIndicator
            color={primary ? colors.secondary : colors.primary}
          />
        )}
        {title && (
          <Text
            style={{
              color: disabled ? "black" : "white",
              paddingLeft: loading ? 5 : 0,
              fontSize: 35,
            }}
          >
            {loading ? "Please wait..." : title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},

  loginBtn: {
    height: 70,
    paddingHorizontal: 5,
    marginVertical: 60,
    marginHorizontal: 55,
    borderRadius: 15,
    width: "70%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  logoutBtn: {
    height: 70,
    paddingHorizontal: 5,
    marginVertical: 60,
    marginHorizontal: 55,
    borderRadius: 15,
    width: "70%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  loaderSection: {
    flexDirection: "row",
  },

  error: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12,
  },
});

export default CustomButton;
