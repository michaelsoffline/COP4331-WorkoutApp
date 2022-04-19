import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const ForgotPasswordScreen = () => {
    const 
    return(
        <View style={styles.container}>
            <Text styles={styles.titleText}>Forgot your Password?</Text>
            <Text styles={styles.subtitleText}>No problem! Enter your email address below and we'll send you an email to reset your password</Text>
            <CustomInput placeholder="Email Address" label="Please enter the email address associated with your account"/>
            <CustomButton primary title="Submit" loading={false} disabled={false} onPress={() => {}} />
        </View>
    );
}

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
    container: {

    },

    titleText: {
        fontSize: 36,
        color: "black",
        justifyContent: "space-evenly",

    },

    subtitleText: {
        fontSize: 16, 
        color: "#D3D3D3",
        justifyContent: "space-evenly"

    }

    
})