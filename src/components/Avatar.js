import React from "react";
import { Image, useWindowDimensions } from "react-native";
import { useSize } from "../util/adaptive";

const Avatar = () => {
    const { width } = useWindowDimensions();
    return (
        <Image
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: useSize(width > 810 ? 300 : 250),
                height: useSize((width > 810 ? 300 : 250) * 1.0829),
            }}
            source={require("../../assets/avatar.png")}
        />
    );
};

export default Avatar;
