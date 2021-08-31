import React from 'react';
import Price from "./Price";
import {StyleSheet} from 'aphrodite';

function PricePhone(props) {
    const style = StyleSheet.create({
        doodle: {
            top: 0,
            left:"10%",
            width: "8rem"
        },
        container:{
           height:"30rem"
        },
        clickable: {
            top: "14.5rem",
            left:"10%",
            width: "7rem"
        },
        saly: {
            left: "40%",
            top: "40%",
            width: "14rem"
        },
    });

    return (
        <Price handleChoices={props.handleChoices} unique_style={style}/>
    );
}

export default PricePhone;