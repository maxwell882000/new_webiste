import React from 'react';
import {HeadersTextLists} from "../store/HeadersTextLists";
import TextButton from "../../text/TextButton";
import close from "../../../../image/close.svg";

function OpenMobileHeader(props) {
    const style = {
        position: 'absolute'
    }

    const positionMainFunctions = [];
    //
    const componentsList = HeadersTextLists.map((e, i) => {
        return <div key={i} style={{
            marginTop: "5vh",
            marginBottom: "5vh",
        }}>
            <TextButton onClick={()=>props.onClickMenu(i)}  text={e} size={"2rem"}/>
        </div>
    });
    return (
        <div className="" style={{
            position: "absolute",
            width: "100%",
            height:"100vh",
            backgroundColor: "white",
            top: 0,
            textAlign: "center"
        }}>
            <div className="row flex-end header-margin" onClick={props.closeMenu}>
                <img src={close} style={{
                    width: "8%",
                }}/>
            </div>
            {componentsList}
        </div>
    );
}

export default OpenMobileHeader;