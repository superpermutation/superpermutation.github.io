import React from "react";
import Circles from "./Circles";
import Title from "./Title";
import Border from "./Border";
import { View, StyleSheet } from "react-native";
const Languages = () => {
    return (
        <Border style={styles.border}>
            <Title>Языки</Title>
            <View style={styles.container}>
                <Circles
                    text="RU"
                    style={styles.ru}
                    rating={[2, 2, 2, 2, 2]}
                ></Circles>
                <Circles text="EN" rating={[0, 0, 1, 2, 2]}></Circles>
            </View>
        </Border>
    );
};
export default Languages;
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        // flex: 1,
        width: "60%",
    },
    ru: {
        marginRight: 10,
    },
    border: {
        // paddingVertical: 20,
        // paddingHorizontal: 50,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        maxWidth: 300,
    },
});
