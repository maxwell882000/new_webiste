import React, {useState} from 'react';
import doodle from "../../../../image/doodle.png";
import clickable from "../../../../image/clickable.png";
import saly from "../../../../image/saly.png";
import {css, StyleSheet} from 'aphrodite';
import Text from "../../../helpers/text/Text";
import Buttons from "../../../helpers/Buttons";
import CustomModel from "../../../helpers/CustomModel";
import ModalPrice from "../modal/ModalPrice";

function Price({unique_style, handleChoices}) {
    const style = StyleSheet.create({

        prices: {
            height: "16rem",
            width: "24rem",
            alignItems: "center",
            justifyContent: "center"
        },
        absolute: {
            position: "absolute"
        },
    })
    const [isOpen, openModel] = useState(false);
    return (
        <div style={{
            flex: "0.6"
        }}>
            <div className={css(unique_style.container)} style={{position: "relative"}}>
                <div className={css(style.prices) + " col"}>
                    <div>
                        <Text center="center" text={ "$ " + handleChoices.overallPrice} size="3rem" fontWeight={700}/>
                    </div>
                    <Buttons onClick={()=>{
                        openModel(true);
                    }} nameOfButton="Заказать" width="45%" />

                </div>
                <img className={css(unique_style.saly, style.absolute)} src={saly}/>
                <img className={css(unique_style.doodle, style.absolute)} src={doodle}/>
                <img className={css(unique_style.clickable, style.absolute)} src={clickable}/>
            </div>

            <ModalPrice state={[isOpen, openModel]} allPrices={handleChoices.chosenPrices}/>
        </div>
    );
}

export default Price;