import React from "react";
import { View, StyleSheet } from "react-native";
import { getSize } from "../util/adaptive";
const Line = () => {
    return <View style={styles.line} />;
};
export default Line;

const styles = StyleSheet.create({
    line: {
        backgroundColor: "#F2AF33",
        width: getSize(280),
        height: 3,
        borderRadius: 10,
    },
});
