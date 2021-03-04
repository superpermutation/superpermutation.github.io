import React from "react";
import { View, StyleSheet } from "react-native";
import Circleempty from "../../svg/circleempty.svg";
import Circlealmostempty from "../../svg/circlealmostempty.svg";
import Circlefull from "../../svg/circlefull.svg";
import { useSize } from "../util/adaptive";

const Circle = ({ fullness }) => {
    const size = useSize(40);
    switch (fullness) {
        case 0:
            return (
                <View style={styles.circle}>
                    <Circleempty width={size} height={size} />
                </View>
            );
        case 1:
            return (
                <View style={styles.circle}>
                    <Circlealmostempty width={size} height={size} />
                </View>
            );
        case 2:
            return (
                <View style={styles.circle}>
                    <Circlefull width={size} height={size} />
                </View>
            );
    }
};

export default Circle;

const styles = StyleSheet.create({
    circle: {
        marginVertical: 2,
    },
});
