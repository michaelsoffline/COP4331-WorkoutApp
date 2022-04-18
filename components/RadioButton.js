import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Component } from "react/cjs/react.production.min";

export default class RadioButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderOptions: [
        { value: "0", label: "Male" },
        { value: "1", label: "Female" },
      ],
    };
  }

  render() {
    return (
      <View>
        {this.state.genderOptions.mao((value, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                const labelState = this.state.genderOptions;
              }}
            >
              <View style={styles.radioBtn}>
                <Text style={{ color: "blue" }}></Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  radioBtn: {},
});
