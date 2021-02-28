import React from "react";
import { View, StyleSheet } from "react-native";

import { getSize } from "../util/adaptive";

const Border = ({ children, style, onLayout }) => {
    return (
        <View style={[styles.border, style]} onLayout={onLayout}>
            {children}
        </View>
    );
};
export default Border;
const styles = StyleSheet.create({
    border: {
        borderColor: "#EDEBE6",
        borderRadius: getSize(40),
        borderWidth: getSize(3),

        margin: 10,
        alignItems: "center",
    },
});
