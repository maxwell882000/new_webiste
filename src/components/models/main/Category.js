import React from 'react';
import {css, StyleSheet} from 'aphrodite';
import Text from "../../helpers/text/Text";

import {useMediaQuery} from "react-responsive";
import {Desktop} from "../../../responsive/Responsive";

function Category({pathToImage, text, colorImageBack}) {

    const firstDivision = useMediaQuery(
        {
            maxWidth: 700,
            minWidth:376,
        }
    )
    const secondDivision = useMediaQuery({
        maxWidth:375,
    })
    function distributeWidth() {
        if(firstDivision){
            return "46%"
        }
        else if (secondDivision){
            return "100%"
        }
        else {
            return "22%"
        }
    }
    const style = StyleSheet.create({
        backgroundRounded: {
            backgroundColor: colorImageBack,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            height: "2.5rem",
            width: "2.5rem"
        },
        image: {
            width: "1.3rem"
        },
        borderCategory: {
            border: "1px solid #EAE9F2",
            borderRadius: '5px',
            alignItems: "center",
            padding: "0.3rem",
            width: distributeWidth(),
            marginBottom: "1.5rem"
        },
    })
    return (
        <div className={css(style.borderCategory) + " row"}>
            <div className={css(style.backgroundRounded)}>
                <img className={css(style.image)} src={pathToImage}/>
            </div>
            <div className="hor-20"/>
            <div>
                <Text text={text} fontWeight={700} size={"1.1rem"}/>
            </div>
        </div>
    );
}

export default Category;