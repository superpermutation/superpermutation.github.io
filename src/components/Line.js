import React from "react";
import { View } from "react-native";
import { useSize } from "../util/adaptive";

const Line = () => {
    return (
        <View
            style={{
                backgroundColor: "#F2AF33",
                width: useSize(260),
                height: 3,
                borderRadius: 10,
            }}
        />
    );
};

export default Line;
