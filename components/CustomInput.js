import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import colors from "../assets/colors";

const CustomInput = ({
  onChangeText,
  iconPosition,
  icon,
  style,
  value,
  label,
  error,
  ...props
}) => {
  const [focused, setFocused] = React.useState(false);

  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === "left") {
        return "row";
      }
    } else if (iconPosition === "right") {
      return "row-reverse";
    }
  };

  const getBorderColor = () => {
    if (error) {
      return colors.danger;
    }

    if (focused) {
      return colors.primary;
    } else {
      return colors.grey;
    }
  };
  return (
    <View style={styles.inputContainer}>
      {label && <Text style={styles.labelPadding}>{label}</Text>}

      <View
        style={[
          styles.wrapper,
          { alignItems: icon ? "center" : "baseline" },
          { borderColor: getBorderColor(), flexDirection: getFlexDirection() },
        ]}
      >
        <View>{icon && icon}</View>

        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          {...props}
        />
      </View>

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

// const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
//   return (
//     <View style={styles.container}>
//       <TextInput
//         placeholder={placeholder}
//         style={styles.input}
//         value={value}
//         onChangeText={setValue}
//         secureTextEntry={secureTextEntry}
//       />
//     </View>
//   );
// };

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: { paddingVertical: 12, backgroundColor: "#fff" },

  wrapper: {
    height: 42,
    width: "90%",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 5,
    marginHorizontal: 15,
  },

  labelPadding: {
    marginHorizontal: 15,
  },

  textInput: {
    flex: 1,
    width: "100%",
  },

  error: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12,
  },
});
