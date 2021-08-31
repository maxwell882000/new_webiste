import React, {useState} from 'react';
import Text from "../../../helpers/text/Text";
import {css, StyleSheet} from "aphrodite";
import check from "../../../../image/check.svg"
import {useMediaQuery} from "react-responsive";
import {RESPONSIVE} from "../../../../responsive/Responsive";
import {styleForServiceDesktop} from "./desktop/styleForServiceDesktop";
import {styleForServicePhone} from "./mobile/styleForServicePhone";

function giveAdditionalStyle(additionalStyle, isMobile) {
    return additionalStyle !== null ? additionalStyle : isMobile ? styleForServicePhone() : styleForServiceDesktop();
}

function ServiceText({
                         id = 0,
                         title = "Service name",
                         price = 10,
                         handleChoices,
                         additionalStyle = null
                     } ,ref) {
    const checkBox = {
        height: "1.2rem",
        width: "1.2rem",
        borderRadius: "50%",
        marginRight: "14px",
        border: "1px solid #979797",
    }
    const [isChosen, setChoice] = useState(handleChoices.initiateChoice(id));
    handleChoices.activationAndDeactivationOfCheck(isChosen, checkBox);
    const mobile = useMediaQuery(RESPONSIVE.MOBILE);

    const style = StyleSheet.create({
        checkBox: checkBox,
        additionalStyle: giveAdditionalStyle(additionalStyle, mobile)
    })

    return (
        <div className={css(style.additionalStyle) + " service alItCenter row"}>
            <div className="alItCenter row">
                <div className={css(style.checkBox) + " row alItCenter jccenter"}
                     onClick={() => {
                         const nextChoice = !isChosen;
                         setChoice(nextChoice);
                         handleChoices.decideAddOrRemove(id, nextChoice);
                     }}
                >
                    <img style={{
                        width: "80%"
                    }} src={check}/>
                </div>
                <Text text={title} fontWeight={600} size={"1.05rem"}> </Text>
            </div>
            <div>
                <Text text={"$" + price} color={"#979797"} size={"0.9rem"} fontStyle={"italic"} fontWeight={400}/>
            </div>

        </div>
    );
}

export default React.forwardRef(ServiceText);