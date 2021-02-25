import React from "react";
import { View, StyleSheet } from "react-native";
const Border = ({ children, style }) => {
    return <View style={[styles.border, style]}>{children}</View>;
};
export default Border;
const styles = StyleSheet.create({
    border: {
        borderColor: "#EDEBE6",
        borderRadius: 40,
        borderWidth: 3,

        margin: 10,
        alignItems: "center",
    },
});
