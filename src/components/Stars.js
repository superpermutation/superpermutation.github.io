import React from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import Star from "./Star";
import { getSize } from "../util/adaptive";
const Stars = ({ text, rating }) => {
    const { width } = useWindowDimensions();
    return (
        <View
            style={{
                flexDirection: width < 770 ? "column" : "row",
                alignItems: "center",
                justifyContent: "flex-end",
            }}
        >
            <Text style={styles.text}>{text}</Text>
            {rating.map((star, index) => (
                <Star fullness={star} key={index} />
            ))}
        </View>
    );
};
export default Stars;

const styles = StyleSheet.create({
    container: {
        // flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        // width: "100%",
    },
    text: {
        color: "#EDEBE6",
        fontFamily: "Neucha_400Regular",
        fontSize: getSize(32),
        marginRight: 5,
        marginTop: 10,
    },
});
