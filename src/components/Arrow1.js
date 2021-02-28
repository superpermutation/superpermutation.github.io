import React from "react";
import { View, useWindowDimensions, StyleSheet } from "react-native";
import { Svg, Path } from "react-native-svg";

import Arrow from "../../svg/arrow1.svg";

const Arrow1 = ({ arrowHeight }) => {
    const { width, height } = useWindowDimensions();
    const mobile = width < height;

    return (
        <View style={styles.container}>
            {mobile ? (
                <Svg
                    viewBox="0 0 51 162"
                    fill="none"
                    stroke="#EDEBE6"
                    width={arrowHeight * (51 / 162)}
                    height={arrowHeight}
                    strokeWidth={(0.6 * 162) / arrowHeight}
                >
                    <Path d="M33 155.5L27.5 153.5L31.5 160.5L38.5 157.5L33 155.5ZM33 155.5C51 131.167 69.8 66.1 1 0.5" />
                </Svg>
            ) : (
                <Arrow width={arrowHeight * (99 / 161)} height={arrowHeight} />
            )}
        </View>
    );
};

export default Arrow1;

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: -20,
        right: "14%",
    },
});
