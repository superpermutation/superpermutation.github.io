import React from "react";
import Starempty from "../../svg/starempty.svg";
import Starfull from "../../svg/starfull.svg";
import Staralmostempty from "../../svg/staralmostempty.svg";
import Staralmostfull from "../../svg/staralmostfull.svg";
import { StyleSheet, View } from "react-native";
import { useSize } from "../util/adaptive";

const Star = ({ fullness }) => {
    const size = useSize(32);
    switch (fullness) {
        case 0:
            return (
                <View style={styles.star}>
                    <Starempty width={size} height={size} />
                </View>
            );
        case 1:
            return (
                <View style={styles.star}>
                    <Staralmostempty width={size} height={size} />
                </View>
            );
        case 2:
            return (
                <View style={styles.star}>
                    <Staralmostfull width={size} height={size} />
                </View>
            );
        case 3:
            return (
                <View style={styles.star}>
                    <Starfull width={size} height={size} />
                </View>
            );
    }
};

export default Star;
const styles = StyleSheet.create({
    star: {
        marginHorizontal: 2,
    },
});
