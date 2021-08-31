import React from 'react';
import Text from "./text/Text";
import {css, StyleSheet} from 'aphrodite';

function Buttons({height = "2.5rem", onClick, width = "40%", nameOfButton}) {
    const style = StyleSheet.create({
        button: {
            textAlign: "center",
            height: height,
            backgroundColor: "#D24A6A",
            border: "none",
            borderRadius: "4px",
            width: width
        },
        addHover:  {
            ":hover":{
                cursor:"pointer",
                opacity:"0.9"
            }
        }

    });
    return (
        <>
            <button onClick={onClick} className={css(style.button, style.addHover)}>
                <Text text={nameOfButton} size={"1.1rem"} fontWeight={600} color={"white"}/>
            </button>
        </>
    );
}

export default Buttons;