import React, { useContext } from "react";
import { Text, StyleSheet, View } from "react-native";
import Line from "./Line";
import Title from "./Title";
import Education from "./Education";

import { LanguageContext } from "../util/language";

const EducationBlock = ({}) => {
    const { language } = useContext(LanguageContext);
    return (
        <View style={styles.container}>
            <Title>{language === "ru" ? "Образование" : "Education"}</Title>
            <Line />
            <View style={styles.ed}>
                <Education uni />
                <Education />
            </View>
        </View>
    );
};

export default EducationBlock;

const styles = StyleSheet.create({
    ed: {
        flexDirection: "row",
    },
    container: {
        alignItems: "center",
    },
});
