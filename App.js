import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { useFonts } from "expo-font";
import Title from "./src/components/Title";
import Border from "./src/components/Border";
import Line from "./src/components/Line";
import Star from "./src/components/Star";
import Stars from "./src/components/Stars";
import Skills from "./src/components/Skills";
import Circles from "./src/components/Circles";
import Languages from "./src/components/Languages";
import Education from "./src/components/Education";
import Experience from "./src/components/Experience";
import Intro from "./src/components/Intro";
import About from "./src/components/About";
import EducationBlock from "./src/components/EducationBlock";
import ExperiencesBlock from "./src/components/ExperiencesBlock";
import Avatar from "./src/components/Avatar";
import Background from "./src/components/Background";
import WaveLine from "./src/components/WaveLine";
import Contacts from "./src/components/Contacts";
import ImagesSwiper from "./src/components/ImagesSwiper";
import { getImage } from "./src/util";
// import ImageView from "react-native-image-view";
import ImgViewer from "react-native-image-viewer-web";
import { getSize } from "./src/util/adaptive";

const images = Array.from({ length: 10 }, (v, i) => getImage(i));

export default function App() {
    const [loaded] = useFonts({
        "Bradley Hand": require("./assets/fonts/Bradley Hand Bold.ttf"),
    });
    const [imageShown, setImageShown] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);

    return (
        <Background>
            <Avatar />

            <View style={styles.row}>
                <View style={{ flex: 1, maxWidth: 300 }} />
                <View style={styles.introblock}>
                    <Title color>Привет!</Title>
                    <Intro />
                    <Title>Немного о себе</Title>
                    <Line />
                </View>
            </View>
            <View style={styles.row}>
                <Skills />
                <About />
            </View>
            <View style={styles.row}>
                <Languages />
                <View
                    style={{
                        flex: 2,
                        padding: 10,
                        maxWidth: 600,
                    }}
                >
                    <EducationBlock />
                    <ExperiencesBlock />
                </View>
            </View>
            <WaveLine />
            <ImagesSwiper />
            <View style={styles.contact}>
                <Contacts />
            </View>
        </Background>
    );
}
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    intro: {
        alignItems: "flex-end",
        width: "100%",
        justifyContent: "center",
        paddingRight: 40,
        paddingTop: 20,
    },
    introblock: {
        alignItems: "center",
        // justifyContent: "center",
        justifyContent: "flex-end",
        flex: 2,
        minHeight: getSize(270 * 1.0829),
        // maxHeight: 250,
        maxWidth: 600,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 10,
        // paddingHorizontal: getSize(50),
    },
    contact: {
        justifyContent: "flex-end",
        width: "100%",
        alignItems: "flex-end",
    },
});
