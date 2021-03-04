import React, { useContext } from "react";
import { Text, View } from "react-native";
import Ris from "../../svg/ris.svg";
import Zai from "../../svg/zai.svg";
import Tel from "../../svg/tel.svg";
import { useSize } from "../util/adaptive";
import { LanguageContext } from "../util/language";
import { experience } from "../const/strings";

const Experience = ({ icon }) => {
    const { language } = useContext(LanguageContext);
    const text = experience[language][icon];
    let image;
    const size = useSize(48);
    switch (icon) {
        case 0:
            image = <Ris width={size} height={size} />;
            break;
        case 1:
            image = <Tel width={size} height={size} />;
            break;
        case 2:
            image = <Zai width={size} height={size} />;
            break;
    }
    return (
        <View
            style={{
                alignItems: "center",
                marginHorizontal: useSize(20),
                flex: 1,
            }}
        >
            {image}
            <Text
                style={{
                    color: "#EDEBE6",
                    fontFamily: "Neucha_400Regular",
                    fontSize: useSize(20),
                    textAlign: "center",
                    marginTop: 5,
                }}
            >
                {text}
            </Text>
        </View>
    );
};
export default Experience;
