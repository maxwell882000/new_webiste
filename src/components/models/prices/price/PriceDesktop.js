import React from 'react';
import {StyleSheet} from 'aphrodite';
import Price from "./Price";

function PriceDesktop(props) {
    const style = StyleSheet.create({
            doodle: {
                top: "-10%",
                width: "8rem"
            },

            clickable: {
                top: "14.5rem",
                width: "7rem"
            },
            saly: {
                left: "60%",
                top: "0",
                width: "14rem"
            },
    })
    return (
        <Price handleChoices={props.handleChoices} unique_style={style}/>
    );
}

export default PriceDesktop;