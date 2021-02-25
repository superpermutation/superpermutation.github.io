import React, { useContext } from "react";
import { Text, StyleSheet, View } from "react-native";
import Line from "./Line";
import Title from "./Title";
import Experience from "./Experience";
import { getSize } from "../util/adaptive";
import { experienceDescription } from "../const/strings";
import { LanguageContext } from "../util/language";

const ExperiencesBlock = ({}) => {
    const { language } = useContext(LanguageContext);
    return (
        <View style={styles.container}>
            <Title>{language === "ru" ? "Опыт работы" : "Experience"}</Title>
            <Line />
            <Text style={styles.text}>{experienceDescription[language]}</Text>
            <View style={styles.ed}>
                <Experience icon={0} />
                <Experience icon={1} />
                <Experience icon={2} />
            </View>
        </View>
    );
};

export default ExperiencesBlock;

const styles = StyleSheet.create({
    ed: {
        flexDirection: "row",
        marginTop: 10,
    },
    container: {
        alignItems: "center",
        paddingHorizontal: 10,
    },
    text: {
        color: "#EDEBE6",
        fontFamily: "Bradley Hand",
        fontSize: getSize(20),
        textAlign: "center",
        marginTop: 5,
    },
});
