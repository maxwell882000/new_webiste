import React from 'react';
import Text from "../text/Text";
import logo from "../../../image/logo.png";

function Logo(props) {
    return (
        <div style={{
            width:"0%"
        }}>
            <img src={logo} style={{
                width:"1rem"
            }}/>
        </div>

    );
}

export default Logo;