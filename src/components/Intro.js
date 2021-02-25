import React, { useContext } from "react";
import Border from "./Border";
import { Text, StyleSheet } from "react-native";
import { getSize } from "../util/adaptive";
import { LanguageContext } from "../util/language";
import { intro } from "../const/strings";

const Intro = ({}) => {
    const { language } = useContext(LanguageContext);
    return (
        <Border style={styles.border}>
            <Text style={styles.text}>{intro[language]}</Text>
        </Border>
    );
};
export default Intro;

const styles = StyleSheet.create({
    border: {
        paddingHorizontal: 20,
        paddingTop: 25,
        paddingBottom: 25,
        maxWidth: 400,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#EDEBE6",
        fontFamily: "Bradley Hand",
        fontSize: getSize(20),
        textAlign: "center",
    },
});
