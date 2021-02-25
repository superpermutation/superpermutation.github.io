import React from "react";
import { Image, useWindowDimensions } from "react-native";
import { getImage } from "../util";

const ArtWork = ({ number }) => {
    const big = (number + 1) % 5 === 0;

    const source = getImage(number);

    const { width } = useWindowDimensions();

    const smallStyle = {
        width: width * 0.15 * 1.2,
        height: width * 0.2 * 1.2,
    };

    const bigStyle = {
        width: width * 0.32 * 1.2,
        height: width * 0.426 * 1.2,
    };

    return <Image source={source} style={big ? bigStyle : smallStyle} />;
};

export default ArtWork;
