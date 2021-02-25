import React from "react";
import Stars from "./Stars";
import Title from "./Title";
import Border from "./Border";
import { View, StyleSheet, useWindowDimensions } from "react-native";

const Skills = () => {
    const { width } = useWindowDimensions();
    return (
        <Border style={style.border}>
            <Title>Навыки</Title>
            <View style={{ flexDirection: width < 770 ? "row" : "column" }}>
                <Stars text="Ps" rating={[3, 3, 3, 3, 1]} />
                <Stars text="Ai" rating={[3, 3, 3, 2, 0]} />
                <Stars text="Id" rating={[3, 3, 3, 0, 0]} />
            </View>
        </Border>
    );
};
export default Skills;
const style = StyleSheet.create({
    border: {
        // paddingHorizontal: 20,
        // paddingTop: 10,
        // paddingBottom: 50,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        maxWidth: 300,
    },
});
