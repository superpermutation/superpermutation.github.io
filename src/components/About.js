import React, { useContext } from "react";
import Border from "./Border";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import { getSize } from "../util/adaptive";
import { LanguageContext } from "../util/language";
import { about } from "../const/strings";
import Ghost from "../../svg/ghost.svg";
const About = ({}) => {
    const { language } = useContext(LanguageContext);
    return (
        <Border style={styles.border}>
            <View style={styles.ghost}>
                <Ghost height={getSize(55)} width={getSize(59.88)} />
            </View>
            <Text style={styles.text}>{about[language]}</Text>
        </Border>
    );
};
export default About;
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
    border: {
        // paddingHorizontal: 20,
        // paddingTop: 25,
        // paddingBottom: 25,
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
        left: getSize(33),
        top: -getSize(55),
    },
});
