import React, { useContext, useRef } from "react";
import {
    Animated,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { getSize } from "../util/adaptive";
import { LanguageContext } from "../util/language";

const LanguageSwitch = () => {
    const node = useRef(new Animated.Value(0)).current;
    const { language, changeLanguage } = useContext(LanguageContext);

    const toggle = () => {
        changeLanguage();
        Animated.timing(node, {
            toValue: language === "ru" ? 1 : 0,
            duration: 200,
        }).start();
    };

    const knobStyle = {
        height: getSize(35),
        width: getSize(35),
        borderRadius: 100,
        backgroundColor: "#f6c778",
        position: "absolute",
        transform: [
            {
                translateX: node.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, getSize(35)],
                }),
            },
        ],
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggle}>
                <View style={styles.track}>
                    <Text style={styles.ru}>EN</Text>
                    <Text style={styles.en}>RU</Text>
                    <Animated.View style={knobStyle} />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default LanguageSwitch;

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        right: 10,
        top: 10,
    },
    track: {
        width: getSize(70),
        height: getSize(35),
        borderRadius: 100,
        backgroundColor: "#F2AF33",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // paddingHorizontal: 5,
    },
    ru: {
        fontSize: getSize(16),
        color: "#EDEBE6",
        fontFamily: "Neucha_400Regular",
        marginLeft: getSize(7),
    },
    en: {
        fontSize: getSize(16),
        color: "#EDEBE6",
        fontFamily: "Neucha_400Regular",
        marginRight: getSize(7),
    },
});
