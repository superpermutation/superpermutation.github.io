import React, { useContext } from "react";
import { Text, StyleSheet, View } from "react-native";

import { useSize } from "../util/adaptive";
import { LanguageContext } from "../util/language";
import { courses, univercity } from "../const/strings";

import Itmo from "../../svg/itmo.svg";
import Courses from "../../svg/courses.svg";

const Education = ({ uni }) => {
    const size = useSize(32);
    const { language } = useContext(LanguageContext);
    return (
        <View
            style={{
                paddingTop: useSize(32),
                paddingLeft: useSize(32),
                flex: 1,
            }}
        >
            <View style={styles.icon}>
                {uni ? (
                    <Itmo width={size} height={size} />
                ) : (
                    <Courses width={size} height={size} />
                )}
            </View>
            <Text
                style={{
                    color: "#EDEBE6",
                    fontFamily: "Neucha_400Regular",
                    fontSize: useSize(20),
                    textAlign: "center",
                }}
            >
                {uni ? univercity[language] : courses[language]}
            </Text>
        </View>
    );
};

export default Education;

const styles = StyleSheet.create({
    icon: {
        position: "absolute",
        top: 10,
        left: 10,
    },
});
