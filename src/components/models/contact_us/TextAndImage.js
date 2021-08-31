import React from 'react';
import Text from "../../helpers/text/Text";
import IconAndText from "./IconAndText";
import facebook from "../../../image/facebook.svg"
import bi_phone from "../../../image/bi_phone.svg"
import insta from "../../../image/insta.svg"
import location from "../../../image/location.svg"
import contact_us from "../../../image/contact_us.png"
import {useMediaQuery} from "react-responsive";
import {RESPONSIVE} from "../../../responsive/Responsive";

function TextAndImage(props) {
    const styleImage = {
        width: "90%"
    }
    const mobile = useMediaQuery(RESPONSIVE.MOBILE);
    const desktop = !mobile;
    const imageDisplay = mobile ? "hide" : "";

    return (
        <div className="row alItCenter jccenter">
            <div style={{
                flex: 0.7,
            }}>
                {desktop &&
                <>
                    <div style={{marginTop: "5%"}}/>
                    <Text text="Those medals there for bungling at which you wear
                on your moth-eaten chest should be there
                for bungling at which you are best." fontWeight={500} size={"1rem"}/>
                </>}

                <IconAndText text={"Our facebook page"} icon={facebook}/>
                <a href={"tel:21421124"} className="remove">
                    <IconAndText text={"+998 (90) 123 45 67"} icon={bi_phone}/>
                </a>
                <IconAndText text={"Our instagram page"} icon={insta}/>
                <IconAndText text={"Ziyolilar 10, Tashkent, 100123"} icon={location}/>
            </div>
            {
                desktop &&
                <>
                    <div style={{
                        flex: 0.5
                    }}/>
                    <div style={{
                        flex: 0.6,
                    }}>
                        <img src={contact_us} alt="" style={styleImage}/>
                    </div>
                </>}

        </div>
    );
}

export default TextAndImage;