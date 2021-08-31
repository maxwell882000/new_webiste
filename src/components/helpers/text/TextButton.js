import React from 'react';
import Text from "./Text";
import TextHover from "./TextHover";

function TextButton(props) {
    return (
            <TextHover {...props}  color={"#696871"}     />
    );
}

export default TextButton;