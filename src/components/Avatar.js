import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import { getSize } from "../util/adaptive";
const Avatar = ({}) => {
    return (
        <Image
            style={styles.image}
            source={require("../../assets/avatar.png")}
        />
    );
};

export default Avatar;
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
    image: {
        // width: width * 0.28,
        width: getSize(width > 700 ? 300 : 250),
        // maxHeight: 250,
        // maxWidth: 231,
        height: getSize((width > 700 ? 300 : 250) * 1.0829),
        position: "absolute",
        top: 0,
        left: 0,
    },
});
