import React from 'react';
import {css, StyleSheet} from "aphrodite";
import TextLink from "../../text/TextLink";
import {Routing} from "../../../routes/Routes";
import Logo from "../Logo";
import {HeadersTextLists} from "../store/HeadersTextLists";

const DesktopHeader = ({
                           index,
                       }) => {

    const routes = [
        Routing.MAIN,
        Routing.PORTFOLIO,
        Routing.SERVICES,
        Routing.REVIEWS,
        Routing.CONTACT_US
    ]
    const containerRowStyle = StyleSheet.create({
        row: {
            flex: 1,
            "display": "flex",
            flexDirection: "row",
            alignItems: "center"
        },
        spaceWidth: {
            marginLeft: "1.5%",
            marginRight: "1.5%"
        },
        margin: {
            margin: "0 7% 0",
            paddingTop: "1.5%"
        }

    });
    const activatedColor = "#D24A6A";
    const deactivatedColor = "#696871";

    function chooseColor(choice, index) {
        return choice === index ? activatedColor : deactivatedColor;
    }

    const componentLists = HeadersTextLists.map((e, i) =>
        <span key={i} className={css(containerRowStyle.spaceWidth)}>
            <TextLink  size={"1rem"} to={routes[i]} text={e} color={chooseColor(index, i)} fontWeight="600"/>
        </span>)
    return (

        <div className={css(containerRowStyle.row, containerRowStyle.margin)}>
            <Logo/>
            <span className={css(containerRowStyle.spaceWidth)}/>
            <span className={css(containerRowStyle.spaceWidth)}/>
            {componentLists}
        </div>
    );
};

export default DesktopHeader;