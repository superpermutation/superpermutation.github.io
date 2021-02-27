import React from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    useWindowDimensions,
} from "react-native";
import Swiper from "react-native-web-swiper/";
import ImagePage from "./ImagePage";
import { getSize } from "../util/adaptive";

const styles = StyleSheet.create({
    button: {
        color: "#EDEBE6",
        fontSize: getSize(40),
        fontWeight: "500",
    },
    activeDot: {
        backgroundColor: "#F2AF33",
    },
});

const ImagesSwiper = () => {
    const { width } = useWindowDimensions();
    return (
        <View style={{ height: width * 0.4266 * 1.2 + 50, width: "100%" }}>
            <Swiper
                minDistanceForAction={0.1}
                loop
                controlsProps={{
                    dotsTouchable: true,
                    prevPos: "left",
                    nextPos: "right",
                    nextTitle: "›",
                    prevTitle: "‹",
                    nextTitleStyle: styles.button,
                    prevTitleStyle: styles.button,
                    dotActiveStyle: styles.activeDot,
                }}
            >
                <ImagePage page={0} />
                <ImagePage page={1} />
            </Swiper>
        </View>
    );
};

export default ImagesSwiper;
