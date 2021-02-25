import React, { useContext } from "react";
import { Text, StyleSheet, View } from "react-native";
import Ris from "../../svg/ris.svg";
import Zai from "../../svg/zai.svg";
import Tel from "../../svg/tel.svg";
import { getSize } from "../util/adaptive";
import { LanguageContext } from "../util/language";
import { experience } from "../const/strings";

const Experience = ({ icon }) => {
    const { language } = useContext(LanguageContext);
    const text = experience[language][icon];
    let image;
    const size = getSize(48);
    switch (icon) {
        case 0:
            image = <Ris width={size} height={size} />;
            break;
        case 1:
            image = <Tel width={size} height={size} />;
            break;
        case 2:
            image = <Zai width={size} height={size} />;
            break;
    }
    return (
        <View style={styles.container}>
            {image}
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};
export default Experience;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginHorizontal: getSize(20),
        flex: 1,
    },
    text: {
        color: "#EDEBE6",
        fontFamily: "Bradley Hand",
        fontSize: getSize(20),
        textAlign: "center",
        marginTop: 5,
    },
});
