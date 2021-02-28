import React from "react";
import { View, useWindowDimensions } from "react-native";
import { Svg, Path } from "react-native-svg";

const Arrow3 = ({ arrowWidth, xStart }) => {
    const { width, height } = useWindowDimensions();
    const mobile = width < height;

    return (
        <View
            style={{
                position: "absolute",
                left: xStart,
                top: mobile ? "3%" : 0,
            }}
        >
            <Svg
                width={arrowWidth}
                height={(arrowWidth * 205) / 636}
                viewBox="0 0 636 205"
                stroke="#EDEBE6"
                fill="none"
                strokeWidth={mobile ? 5 : (2 * 636) / arrowWidth}
            >
                <Path d="M616.75 20.6278L633.5 3.62782L635 46.1278L600 37.6278L616.75 20.6278ZM616.75 20.6278C544.833 -14.5389 321 -27.1722 1 203.628" />
            </Svg>
        </View>
    );
};

export default Arrow3;
