import React from 'react';
import {css, StyleSheet} from 'aphrodite';
import Text from "../../helpers/text/Text";
import ImagesAnimation from "./ImagesAnimation";
import Buttons from "../../helpers/Buttons";
import {Desktop} from "../../../responsive/Responsive";
import {useMediaQuery} from "react-responsive";
import Hello from "./Hello";

const HelloAndImage = () => {
    const style = StyleSheet.create({
        containerRow: {
            flex: 1,
            'display': "flex",
            flexDirection: "row",
            flexFlow: "wrap-reverse",
            alignItems: "center",
        },
        secondColumn: {
            flex: 2,
        },
    })

    return (
        <div className={css(style.containerRow)}>
            <Hello/>
            <div style={{
                flex: 0.5
            }}/>
            <div className={css(style.secondColumn)}>
                <ImagesAnimation/>
            </div>
        </div>
    );
};

export default HelloAndImage;
