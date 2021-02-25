import React from "react";
import { Image, View, Pressable, useWindowDimensions } from "react-native";
import { getImage } from "../util";

const ArtWork = ({ number, onPress }) => {
    const big = (number + 1) % 5 === 0;

    const source = getImage(number);

    const { width } = useWindowDimensions();

    const smallStyle = {
        width: width * 0.15 * 1.2,
        height: width * 0.2 * 1.2,
        // flex: 1,
    };

    const bigStyle = {
        width: width * 0.32 * 1.2,
        height: width * 0.426 * 1.2,
        // flex: 2,
    };

    return (
        <Pressable onPress={onPress}>
            <Image source={source} style={big ? bigStyle : smallStyle} />
        </Pressable>
    );
};

export default ArtWork;
