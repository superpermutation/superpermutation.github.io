import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import ArtWork from "./ArtWork";

const ImagePage = ({ page, onPress }) => {
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
                    heigth: width * 0.4266 * 1.2,
                }}
            >
                <View style={styles.column}>
                    <ArtWork
                        number={page * 5}
                        onPress={() => onPress(page * 5)}
                    />
                    <ArtWork
                        number={page * 5 + 1}
                        onPress={() => onPress(page * 5 + 1)}
                    />
                </View>
                <View style={styles.column}>
                    <ArtWork
                        number={page * 5 + 2}
                        onPress={() => onPress(page * 5 + 2)}
                    />
                    <ArtWork
                        number={page * 5 + 3}
                        onPress={() => onPress(page * 5 + 3)}
                    />
                </View>
                <ArtWork
                    number={page * 5 + 4}
                    onPress={() => onPress(page * 5 + 4)}
                />
            </View>
        </View>
    );
};

export default ImagePage;

const styles = StyleSheet.create({
    container: {
        width: "85%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    column: {
        // height: 350,
        height: "100%",
        justifyContent: "space-between",
        alignItems: "center",
    },
});
