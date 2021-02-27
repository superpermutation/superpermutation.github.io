import React, { useContext } from "react";
import Border from "./Border";
import { Text, StyleSheet, View } from "react-native";
import { getSize } from "../util/adaptive";
import { LanguageContext } from "../util/language";
import { intro } from "../const/strings";
import Arrow from "../../svg/arrow1.svg";

const Intro = ({}) => {
    const { language } = useContext(LanguageContext);
    return (
        <>
            <Border style={styles.border}>
                <Text style={styles.text}>{intro[language]}</Text>
            </Border>
            <View style={styles.arrow}>
                <Arrow width={getSize(58.8)} height={getSize(70)} />
            </View>
        </>
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
        fontFamily: "Neucha_400Regular",
        fontSize: getSize(20),
        textAlign: "center",
    },
    arrow: {
        position: "absolute",
        bottom: getSize(-21),
        // alignSelf: "flex-end",
        // marginLeft: "-2%",
    },
});
