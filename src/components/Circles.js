import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Circle from "./Circle";
import { useSize } from "../util/adaptive";

const Circles = ({ text, rating, style }) => {
    return (
        <View style={[styles.container, style]}>
            <Text
                style={{
                    color: "#EDEBE6",
                    fontFamily: "Neucha_400Regular",
                    fontSize: useSize(32),
                    marginBottom: 5,
                }}
            >
                {text}
            </Text>
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
});
