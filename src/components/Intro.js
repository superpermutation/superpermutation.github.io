import React from "react";
import Border from "./Border";
import { Text, StyleSheet } from "react-native";
import { getSize } from "../util/adaptive";
const Intro = ({}) => {
    return (
        <Border style={styles.border}>
            <Text style={styles.text}>
                Меня зовут Даша и я иллюстратор. Иллюстрации помогают наполнять
                наш мир новыми красками, показывать обыденные вещи ярче и
                интереснее. Я рада воплощать в жизнь самые невероятные, сложные
                и, конечно, безумно красивые идеи.
            </Text>
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
