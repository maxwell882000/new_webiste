import React from 'react';
import Text from "../../helpers/text/Text";
import Buttons from "../../helpers/Buttons";
import {useMediaQuery} from "react-responsive";
import {Desktop} from "../../../responsive/Responsive";
import {css} from "aphrodite";

function Hello(props) {
    const isDesktop = useMediaQuery(Desktop);
    const responsiveStyle = isDesktop ? {"flex":"2"} : {};
    return (
        <div style={responsiveStyle}>
            <Text text="SiriusTech поможет вополатить ваши идеи в реальность!"
                  color={"#121212"}
                  fontWeight={700}
                  size={"3rem"}/>
            <br/>
            <Text text="Мы современная IT компания которая поможет вам начать свой путь в техническом мире"
                  color={"#121212"}
                  fontWeight={500} size={"1.3rem"}/>
            <br/><br/>
            <a href={"tel:21421124"} className="remove">
                <Buttons nameOfButton={"Позвонить"}/>
            </a>
        </div>
    );
}

export default Hello;