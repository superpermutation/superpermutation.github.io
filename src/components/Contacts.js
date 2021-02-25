import React from "react";
import {
    Text,
    StyleSheet,
    View,
    useWindowDimensions,
    Dimensions,
} from "react-native";
import Contact from "./Contact";
import Waveline from "../../svg/waveline_.svg";
import { getSize } from "../util/adaptive";

const Contacts = ({}) => {
    const { width } = useWindowDimensions();
    return (
        <View style={styles.container}>
            <Waveline width={getSize(400)} height={getSize(167)} />
            <View style={styles.textContainer}>
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
    textContainer: {
        position: "absolute",
        paddingTop: getSize(20),
    },
});
