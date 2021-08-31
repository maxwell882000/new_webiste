import React, {useState} from 'react';
import Logo from "../Logo";
import menu from "../../../../image/menu.svg";

import OpenMobileHeader from "./OpenMobileHeader";

function MobileHeader({onClickMenu}) {
    const style = {
        margin: "0 7% 0",
        paddingTop: "3%",
    }
    const [isClicked, clickHeader] = useState(false);
    return (
        <>
            <div className="row spbween header-margin" style={style}>
                <Logo/>
                <div onClick={() => clickHeader(!isClicked)}>
                    <img src={menu}/>
                </div>
            </div>
            {isClicked && <OpenMobileHeader onClickMenu={(index)=>{
                clickHeader(false);
                onClickMenu(index);}} closeMenu={
                () => clickHeader(false)
            }/>}
        </>

    );
}

export default MobileHeader;