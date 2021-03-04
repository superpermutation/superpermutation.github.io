import React from "react";
import { View, useWindowDimensions } from "react-native";
import { useSize } from "../util/adaptive";
import ArtWork from "./ArtWork";

const ImagePage = ({ page }) => {
    const { width } = useWindowDimensions();
    const column = {
        height: width * 0.426 * 1.2,
        justifyContent: "space-between",
        alignItems: "center",
    };
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
                    heigth: useSize(736),
                }}
            >
                <View style={column}>
                    <ArtWork number={page * 5} />
                    <ArtWork number={page * 5 + 1} />
                </View>
                <View style={column}>
                    <ArtWork number={page * 5 + 2} />
                    <ArtWork number={page * 5 + 3} />
                </View>
                <ArtWork number={page * 5 + 4} />
            </View>
        </View>
    );
};

export default ImagePage;
