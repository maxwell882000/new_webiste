import React from 'react';
import Title from "../../helpers/text/Title";
import TextAndImage from "./TextAndImage";
import {useMediaQuery} from "react-responsive";
import {RESPONSIVE} from "../../../responsive/Responsive";

function ContactUs(props, ref) {
    const mobile = useMediaQuery(RESPONSIVE.MOBILE);
    const center = mobile ? "text-center" : "";
    return (
        <div  ref={ref} className={"body global-margin " + center}>
            <div style={{marginBottom: "8%"}}/>
            <Title title={"Свяжитесь с нами"}/>
            <TextAndImage/>
        </div>
    );

}

export default React.forwardRef(ContactUs);