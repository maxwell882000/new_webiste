import React from 'react';
import {useMediaQuery} from "react-responsive";
import DesktopHeader from "./desktop/DesktopHeader";
import MobileHeader from "./mobile/MobileHeader";
import {RESPONSIVE} from "../../../responsive/Responsive";

const Header = (props) => {
    const mobile = useMediaQuery(
        RESPONSIVE.MOBILE
    )
    const desktop = !mobile;
    return (
        <div className="header-margin">
            {desktop && <DesktopHeader {...props}/>}
            {mobile && <MobileHeader {...props}/>}
        </div>

    );
};


