import React from "react";
import {
    StyleSheet,
    View,
    Text,
    Linking,
    Pressable,
    useWindowDimensions,
} from "react-native";
import { Hoverable } from "react-native-web-hover";
import Inst from "../../svg/inst.svg";
import Email from "../../svg/email.svg";
import { getSize } from "../util/adaptive";
const Contact = ({ email }) => {
    const onEmail = () => {
        Linking.openURL("mailto:aksamidnaya@gmail.com");
    };
    const onInst = () => {
        Linking.openURL("https://instagram.com/aksamidnaya");
    };

    const { width, height } = useWindowDimensions();
    const mobile = width < height;

    const size = getSize(32);

    return (
        <Hoverable>
            {({ hovered }) => (
                <Pressable onPress={() => (email ? onEmail() : onInst())}>
                    <View style={styles.container}>
                        {email ? (
                            <Email width={size} height={size} />
                        ) : (
                            <Inst width={size} height={size} />
                        )}
                        <Text
                            style={[
                                styles.text,
                                (hovered || mobile) && styles.hovered,
                            ]}
                        >
                            {email ? "aksamidnaya@gmail.com" : "@aksamidnaya"}
                        </Text>
                    </View>
                </Pressable>
            )}
        </Hoverable>
    );
};
export default Contact;

const styles = StyleSheet.create({
    text: {
        color: "#356C7B",
        fontSize: getSize(20),
        fontFamily: "Neucha_400Regular",
        marginLeft: 10,
    },
    container: {
        alignItems: "center",
        flexDirection: "row",
        marginTop: 10,
    },
    hovered: {
        textDecorationLine: "underline",
    },
});
