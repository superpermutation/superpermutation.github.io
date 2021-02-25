import React from "react";
import { Text, StyleSheet } from "react-native";
import { getSize } from "../util/adaptive";
const Title = ({ color, children }) => {
    return (
        <Text style={[styles.main, color && styles.privet]}>{children}</Text>
    );
};
export default Title;
const styles = StyleSheet.create({
    main: {
        color: "#EDEBE6",
        fontFamily: "Bradley Hand",
        fontSize: getSize(32),
    },
    privet: {
        color: "#F2AF33",
    },
});
