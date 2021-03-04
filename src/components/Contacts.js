import React from "react";
import { StyleSheet, View } from "react-native";
import Contact from "./Contact";
import Waveline from "../../svg/waveline_.svg";
import { useSize } from "../util/adaptive";

const Contacts = ({}) => {
    return (
        <View style={styles.container}>
            <Waveline width={useSize(400)} height={useSize(167)} />
            <View
                style={{
                    position: "absolute",
                    paddingTop: useSize(20),
                }}
            >
                <Contact email />
                <Contact />
            </View>
        </View>
    );
};
export default Contacts;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
});
