import { PixelRatio, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const getSize = n =>
    PixelRatio.roundToNearestPixel((n * Math.min(height, width)) / 719);
