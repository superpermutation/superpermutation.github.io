import React from "react";
import { Text, StyleSheet } from "react-native";
import { useSize } from "../util/adaptive";
const Title = ({ color, children }) => {
    return (
        <Text
            style={[
                {
                    color: "#EDEBE6",
                    fontFamily: "Neucha_400Regular",
                    fontSize: useSize(32),
                },
                color && styles.privet,
            ]}
        >
            {children}
        </Text>
    );
};
export default Title;
const styles = StyleSheet.create({
    privet: {
        color: "#F2AF33",
    },
});
