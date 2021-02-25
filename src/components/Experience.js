import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Ris from "../../svg/ris.svg";
import Zai from "../../svg/zai.svg";
import Tel from "../../svg/tel.svg";
import { getSize } from "../util/adaptive";

const Experience = ({ icon }) => {
    let text;
    let image;
    const size = getSize(48);
    switch (icon) {
        case 0:
            image = <Ris width={size} height={size} />;
            text = "Детские раскраски";
            break;
        case 1:
            image = <Tel width={size} height={size} />;
            text = "Casual game";
            break;
        case 2:
            image = <Zai width={size} height={size} />;
            text = "Иллюстрации для\nдетских книг";
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
