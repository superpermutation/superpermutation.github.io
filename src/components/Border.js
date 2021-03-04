import React from "react";
import { View } from "react-native";

import { useSize } from "../util/adaptive";

const Border = ({ children, style, onLayout }) => {
    return (
        <View
            style={[
                {
                    borderColor: "#EDEBE6",
                    borderRadius: useSize(40),
                    borderWidth: useSize(3),

                    margin: 10,
                    alignItems: "center",
                },
                style,
            ]}
            onLayout={onLayout}
        >
            {children}
        </View>
    );
};
export default Border;
