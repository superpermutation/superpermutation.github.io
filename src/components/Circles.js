import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Circle from "./Circle";
import { getSize } from "../util/adaptive";

const Circles = ({ text, rating, style }) => {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.text}>{text}</Text>
            {rating.map((circle, index) => (
                <Circle fullness={circle} key={index} />
            ))}
        </View>
    );
};
export default Circles;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    text: {
        color: "#EDEBE6",
        fontFamily: "Neucha_400Regular",
        fontSize: getSize(32),
        marginBottom: 5,
    },
});
