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
import { useSize } from "../util/adaptive";

const styles = StyleSheet.create({
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
                    nextTitleStyle: {
                        color: "#EDEBE6",
                        fontSize: useSize(40),
                        fontWeight: "500",
                    },
                    prevTitleStyle: {
                        color: "#EDEBE6",
                        fontSize: useSize(40),
                        fontWeight: "500",
                    },
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
