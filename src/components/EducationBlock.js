import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Line from "./Line";
import Title from "./Title";
import Education from "./Education";

const EducationBlock = ({}) => {
    return (
        <View style={styles.container}>
            <Title>Образование</Title>
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
