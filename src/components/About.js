import React from "react";
import Border from "./Border";
import { Text, StyleSheet } from "react-native";
import { getSize } from "../util/adaptive";
const About = ({}) => {
    return (
        <Border style={styles.border}>
            <Text style={styles.text}>
                {
                    "С самого детства я любила создавать поделки своими руками, рисовать, используя для этого различные материалы. Я росла в сером городе, который так и хотелось заполнить яркими красками, улыбчивыми людьми и положительными эмоциями. Пожалуй, именно это и привело меня в профессию Иллюстратора.\nСейчас я могу нарисовать тот самый идеальный для меня мир и показать его остальным. Но, со временем, я поняла, что иллюстрация — это история не только про красивую картинку, но и про информацию, которая легче всего усваивается визуально."
                }
            </Text>
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
