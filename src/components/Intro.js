import React, { useContext } from "react";
import Border from "./Border";
import { Text, StyleSheet, View } from "react-native";
import { useSize } from "../util/adaptive";
import { LanguageContext } from "../util/language";
import { intro } from "../const/strings";

const Intro = ({}) => {
    const { language } = useContext(LanguageContext);
    return (
        <Border style={styles.border}>
            <Text
                style={{
                    color: "#EDEBE6",
                    fontFamily: "Neucha_400Regular",
                    fontSize: useSize(20),
                    textAlign: "center",
                }}
            >
                {intro[language]}
            </Text>
        </Border>
    );
};
export default Intro;

const styles = StyleSheet.create({
    border: {
        paddingHorizontal: 20,
        paddingVertical: 25,
        maxWidth: 400,
        alignItems: "center",
        justifyContent: "center",
    },
});
