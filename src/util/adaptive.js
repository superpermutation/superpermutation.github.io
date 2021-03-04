import { PixelRatio, useWindowDimensions } from "react-native";

export const useSize = n => {
    const { width, height } = useWindowDimensions();
    return PixelRatio.roundToNearestPixel((n * Math.min(height, width)) / 719);
};
