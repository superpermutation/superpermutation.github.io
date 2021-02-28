import React from "react";
import { View, useWindowDimensions } from "react-native";
import { Svg, Path } from "react-native-svg";
import { getSize } from "../util/adaptive";

const Arrow2 = ({ arrowWidth, y, xStart }) => {
    const { width, height } = useWindowDimensions();
    const mobile = width < height && width < 810;

    return (
        <View
            style={{
                position: "absolute",
                left: xStart,
                top: y,
            }}
        >
            {mobile ? (
                <Svg
                    width={arrowWidth}
                    height={(arrowWidth * 44) / 169}
                    viewBox="0 0 169 44"
                    stroke="#EDEBE6"
                    fill="none"
                    strokeWidth={getSize(10)}
                >
                    <Path d="M18 16.5L1 32.5V0.5H35L18 16.5ZM18 16.5C44.1667 40 110.2 69.7 165 0.5" />
                </Svg>
            ) : (
                <Svg
                    width={arrowWidth}
                    height={(arrowWidth * 37) / 145}
                    viewBox="0 0 145 37"
                    stroke="#EDEBE6"
                    fill="none"
                    strokeWidth={(2 * 145) / arrowWidth}
                >
                    <Path d="M7.75 8.25L1 15.5V1H14.5L7.75 8.25ZM7.75 8.25C28.5 30.6667 84.9 60.6 144.5 1" />
                </Svg>
            )}
        </View>
    );
};

export default Arrow2;
