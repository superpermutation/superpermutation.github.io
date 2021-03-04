import React, { useContext } from "react";
import { Text, StyleSheet, View, useWindowDimensions } from "react-native";
import Waveline from "../../svg/waveline.svg";
import { useSize } from "../util/adaptive";
import { LanguageContext } from "../util/language";

const WaveLine = ({}) => {
    const { width } = useWindowDimensions();
    const { language } = useContext(LanguageContext);
    return (
        <View
            style={{
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                marginVertical: useSize(-70),
            }}
        >
            <View style={styles.wave}>
                <Waveline width={width} height={width * 0.4158} />
            </View>
            <Text
                style={{
                    color: "#356C7B",
                    fontSize: useSize(32),
                    fontFamily: "Neucha_400Regular",
                    position: "absolute",
                }}
            >
                {language === "ru"
                    ? "Примеры моих работ"
                    : "Examples of my illustrations"}
            </Text>
        </View>
    );
};
export default WaveLine;

const styles = StyleSheet.create({
    wave: {
        width: "100%",
    },
});
