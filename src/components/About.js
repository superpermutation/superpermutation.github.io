import React, { useContext } from "react";
import Border from "./Border";
import { Text, StyleSheet } from "react-native";
import { getSize } from "../util/adaptive";
import { LanguageContext } from "../util/language";
import { about } from "../const/strings";
const About = ({}) => {
    const { language } = useContext(LanguageContext);
    return (
        <Border style={styles.border}>
            <Text style={styles.text}>{about[language]}</Text>
        </Border>
    );
};
export default About;

const styles = StyleSheet.create({
    border: {
        // paddingHorizontal: 20,
        // paddingTop: 25,
        // paddingBottom: 25,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        flex: 2,
        maxWidth: 600,
    },
    text: {
        color: "#EDEBE6",
        fontFamily: "Bradley Hand",
        fontSize: getSize(20),
        textAlign: "center",
    },
});
