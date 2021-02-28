import React, { useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { useFonts, Neucha_400Regular } from "@expo-google-fonts/neucha";

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
import LanguageSwitch from "./src/components/LanguageSwitch";
import Arrow1 from "./src/components/Arrow1";
import Arrow2 from "./src/components/Arrow2";
import Arrow3 from "./src/components/Arrow3";

import { getSize } from "./src/util/adaptive";
import { LanguageContext } from "./src//util/language";

export default function App() {
    useFonts({ Neucha_400Regular });
    const [language, setLanguage] = useState("ru");
    const changeLanguage = () =>
        setLanguage(lang => (lang === "ru" ? "en" : "ru"));

    const [arrow1Height, setArrow1Height] = useState(0);

    const [arrow2XStart, setArrow2XStart] = useState(0);
    const [arrow2XEnd, setArrow2XEnd] = useState(0);
    const [arrow2Y, setArrow2Y] = useState(0);
    const arrow2Width = arrow2XEnd - arrow2XStart;

    const [arrow3XStart, setArrow3XStart] = useState(0);
    const [arrow3XEnd, setArrow3XEnd] = useState(0);
    const arrow3Width = arrow3XEnd - arrow3XStart;

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
                        <View
                            onLayout={event =>
                                setArrow1Height(
                                    event.nativeEvent.layout.height + 32
                                )
                            }
                            style={{ alignItems: "center" }}
                        >
                            <Title>
                                {language === "ru"
                                    ? "Немного о себе"
                                    : "A bit about me"}
                            </Title>
                            <Line />
                        </View>
                        <Arrow1 arrowHeight={arrow1Height} />
                    </View>
                </View>
                <View style={styles.row}>
                    <Skills
                        onLayout={({
                            nativeEvent: {
                                layout: { x, width, height },
                            },
                        }) => {
                            setArrow2XStart(x + width);
                            setArrow2Y(height * 0.7);
                        }}
                    />
                    <About
                        onLayout={({
                            nativeEvent: {
                                layout: { x, width },
                            },
                        }) => {
                            setArrow2XEnd(x);
                            setArrow3XEnd(x + width / 4);
                        }}
                    />
                    <Arrow2
                        y={arrow2Y}
                        arrowWidth={arrow2Width}
                        xStart={arrow2XStart}
                    />
                </View>
                <View style={styles.row}>
                    <Languages
                        onLayout={({
                            nativeEvent: {
                                layout: { x, width },
                            },
                        }) => {
                            setArrow3XStart(x + width);
                        }}
                    />
                    <View
                        style={{
                            flex: 2.4,
                            maxWidth: 600,
                        }}
                    >
                        <EducationBlock />
                        <ExperiencesBlock />
                    </View>
                    <Arrow3 arrowWidth={arrow3Width} xStart={arrow3XStart} />
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
        minHeight: getSize((width > 700 ? 290 : 270) * 1.0829),
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
