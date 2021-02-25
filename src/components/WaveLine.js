import React from "react";
import { Text, StyleSheet, View, useWindowDimensions } from "react-native";
import Waveline from "../../svg/waveline.svg";
import { getSize } from "../util/adaptive";
const WaveLine = ({}) => {
    const { width } = useWindowDimensions();
    return (
        <View style={styles.container}>
            <View style={styles.wave}>
                <Waveline width={width} height={width * 0.4158} />
            </View>
            <Text style={styles.text}>Примеры моих работ</Text>
        </View>
    );
};
export default WaveLine;
const styles = StyleSheet.create({
    text: {
        color: "#356C7B",
        fontSize: getSize(32),
        fontFamily: "Bradley Hand",
        position: "absolute",
    },
    wave: {
        width: "100%",
    },
    container: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: getSize(-70),
    },
});
