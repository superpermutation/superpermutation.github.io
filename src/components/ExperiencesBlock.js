import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Line from "./Line";
import Title from "./Title";
import Experience from "./Experience";
import { getSize } from "../util/adaptive";

const ExperiencesBlock = ({}) => {
    return (
        <View style={styles.container}>
            <Title>Опыт работы</Title>
            <Line />
            <Text style={styles.text}>
                Мой опыт работы иллюстратором всего лишь год, но за это время я
                успела поработать над разноплановыми проектами.
            </Text>
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
        // width: 500,
    },
});
