import React from "react";
import { View, Text, useWindowDimensions } from "react-native";
import Star from "./Star";
import { useSize } from "../util/adaptive";
const Stars = ({ text, rating }) => {
    const { width, height } = useWindowDimensions();
    return (
        <View
            style={{
                flexDirection: width < 770 || height > width ? "column" : "row",
                alignItems: "center",
                justifyContent: "flex-end",
            }}
        >
            <Text
                style={{
                    color: "#EDEBE6",
                    fontFamily: "Neucha_400Regular",
                    fontSize: useSize(32),
                    marginRight: 5,
                    marginTop: 10,
                }}
            >
                {text}
            </Text>
            {rating.map((star, index) => (
                <Star fullness={star} key={index} />
            ))}
        </View>
    );
};
export default Stars;
