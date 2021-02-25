import React from "react";
import {
    View,
    StyleSheet,
    useWindowDimensions,
    Dimensions,
} from "react-native";
import { getSize } from "../util/adaptive";
import ArtWork from "./ArtWork";

const ImagePage = ({ page }) => {
    const { width } = useWindowDimensions();
    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 50,
            }}
        >
            <View
                style={{
                    width: "80%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    heigth: getSize(736),
                }}
            >
                <View style={styles.column}>
                    <ArtWork number={page * 5} />
                    <ArtWork number={page * 5 + 1} />
                </View>
                <View style={styles.column}>
                    <ArtWork number={page * 5 + 2} />
                    <ArtWork number={page * 5 + 3} />
                </View>
                <ArtWork number={page * 5 + 4} />
            </View>
        </View>
    );
};

export default ImagePage;

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        width: "85%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    column: {
        // height: 350,
        // height: "100%",
        height: width * 0.426 * 1.2,
        // flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
    },
});
