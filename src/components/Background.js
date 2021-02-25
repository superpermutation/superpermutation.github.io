import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
const Background = ({ children }) => {
    return (
        <ImageBackground
            resizeMode="repeat"
            source={require("../../assets/background.png")}
            style={styles.image}
        >
            {children}
        </ImageBackground>
    );
};
export default Background;

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "100%",
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
    },
});
