import React, { useContext } from "react";
import { Text, StyleSheet, View } from "react-native";

import Border from "./Border";

import { useSize } from "../util/adaptive";
import { LanguageContext } from "../util/language";
import { about } from "../const/strings";

import Ghost from "../../svg/ghost.svg";

const About = ({ onLayout }) => {
    const { language } = useContext(LanguageContext);

    return (
        <Border style={styles.border} onLayout={onLayout}>
            <View
                style={{
                    position: "absolute",
                    left: useSize(20),
                    top: -useSize(50),
                }}
            >
                <Ghost height={useSize(50)} width={useSize(54.44)} />
            </View>
            <Text
                style={{
                    color: "#EDEBE6",
                    fontFamily: "Neucha_400Regular",
                    fontSize: useSize(20),
                    textAlign: "center",
                }}
            >
                {about[language]}
            </Text>
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
});
