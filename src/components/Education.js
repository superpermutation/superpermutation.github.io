import React, { useContext } from "react";
import { Text, StyleSheet, View } from "react-native";

import { getSize } from "../util/adaptive";
import { LanguageContext } from "../util/language";
import { courses, univercity } from "../const/strings";

import Itmo from "../../svg/itmo.svg";
import Courses from "../../svg/courses.svg";

const Education = ({ uni }) => {
    const size = getSize(32);
    const { language } = useContext(LanguageContext);
    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                {uni ? (
                    <Itmo width={size} height={size} />
                ) : (
                    <Courses width={size} height={size} />
                )}
            </View>
            <Text style={styles.text}>
                {uni ? univercity[language] : courses[language]}
            </Text>
        </View>
    );
};

export default Education;

const styles = StyleSheet.create({
    container: {
        paddingTop: getSize(32),
        paddingLeft: getSize(32),
        flex: 1,
    },
    icon: {
        position: "absolute",
        top: 10,
        left: 10,
    },
    text: {
        color: "#EDEBE6",
        fontFamily: "Bradley Hand",
        fontSize: getSize(20),
        textAlign: "center",
    },
});
