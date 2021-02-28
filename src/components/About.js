import React, { useContext } from "react";
import { Text, StyleSheet, View } from "react-native";

import Border from "./Border";

import { getSize } from "../util/adaptive";
import { LanguageContext } from "../util/language";
import { about } from "../const/strings";

import Ghost from "../../svg/ghost.svg";

const About = ({ onLayout }) => {
    const { language } = useContext(LanguageContext);
    return (
        <Border style={styles.border} onLayout={onLayout}>
            <View style={styles.ghost}>
                <Ghost height={getSize(50)} width={getSize(54.44)} />
            </View>
            <Text style={styles.text}>{about[language]}</Text>
        </Border>
    );
};

export default About;

const styles = StyleSheet.create({
    border: {
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        flex: 2.4,
        maxWidth: 600,
    },
    text: {
        color: "#EDEBE6",
        fontFamily: "Neucha_400Regular",
        fontSize: getSize(20),
        textAlign: "center",
    },
    ghost: {
        position: "absolute",
        left: getSize(18),
        top: -getSize(50),
    },
});
