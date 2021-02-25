import React from "react";
import Starempty from "../../svg/starempty.svg";
import Starfull from "../../svg/starfull.svg";
import Staralmostempty from "../../svg/staralmostempty.svg";
import Staralmostfull from "../../svg/staralmostfull.svg";
import { StyleSheet, View } from "react-native";
import { getSize } from "../util/adaptive";

const Star = ({ fullness }) => {
    switch (fullness) {
        case 0:
            return (
                <View style={styles.star}>
                    <Starempty width={getSize(32)} height={getSize(32)} />
                </View>
            );
        case 1:
            return (
                <View style={styles.star}>
                    <Staralmostempty width={getSize(32)} height={getSize(32)} />
                </View>
            );
        case 2:
            return (
                <View style={styles.star}>
                    <Staralmostfull width={getSize(32)} height={getSize(32)} />
                </View>
            );
        case 3:
            return (
                <View style={styles.star}>
                    <Starfull width={getSize(32)} height={getSize(32)} />
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
