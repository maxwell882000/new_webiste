import React from 'react';
import Text from "./Text";

function TextHover({
                       fontWeight = 600,
                       text,
                        color,
                       colorHover = "#D24A6A",
                       size,
                        onClick
                   }) {
    return (
        <>
            <span onClick={onClick}>
            <Text fontWeight={fontWeight} text={text} color={color} size={size} hover={{
                cursor: "pointer",
                color: colorHover
            }}/>
            </span>
        </>
    );
}

export default TextHover;