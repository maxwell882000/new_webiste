import React from 'react';
import Text from "./Text";
import {Link} from "react-router-dom";

function TextLink({
                      fontWeight = 600,
                      text,
                      color,
                      size,
                      to
                  }) {
    return (
        <Link to={to} style={{
            textDecoration: "none"
        }}>
            <Text fontWeight={fontWeight} text={text} color={color} size={size} hover={{
                cursor: "pointer",
                color: "#D24A6A"
            }}/>
        </Link>
    );
}

export default TextLink;