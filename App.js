import React, { useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { useFonts } from "expo-font";
import Title from "./src/components/Title";
import Line from "./src/components/Line";
import Skills from "./src/components/Skills";
import Languages from "./src/components/Languages";
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
import { getSize } from "./src/util/adaptive";
import { LanguageContext } from "./src//util/language";
import LanguageSwitch from "./src/components/LanguageSwitch";

export default function App() {
    const [loaded] = useFonts({
        "Bradley Hand": require("./assets/fonts/Bradley Hand Bold.ttf"),
    });

    const [language, setLanguage] = useState("ru");
    const changeLanguage = () =>
        setLanguage(lang => (lang === "ru" ? "en" : "ru"));

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            <Background>
                <Avatar />

                <View style={styles.row}>
                    <View style={{ flex: 1, maxWidth: 300 }} />
                    <View style={styles.introblock}>
                        <Title color>
                            {language === "ru" ? "Привет!" : "Hi!"}
                        </Title>
                        <Intro />
                        <Title>
                            {language === "ru"
                                ? "Немного о себе"
                                : "A bit about me"}
                        </Title>
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
                <LanguageSwitch />
            </Background>
        </LanguageContext.Provider>
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
        justifyContent: "flex-end",
        flex: 2,
        minHeight: getSize(270 * 1.0829),
        maxWidth: 600,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 10,
    },
    contact: {
        justifyContent: "flex-end",
        width: "100%",
        alignItems: "flex-end",
    },
});
