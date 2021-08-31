import React from 'react';
import {useMediaQuery} from "react-responsive";
import {RESPONSIVE} from "../../../../responsive/Responsive";
import PricePhone from "./PricePhone";
import PriceDesktop from "./PriceDesktop";

function PriceDecide({handleChoices}) {
    const mobile_mini = useMediaQuery(RESPONSIVE.MINI_MOBILE);
    const price = mobile_mini ? <PricePhone handleChoices={handleChoices}/> : <PriceDesktop handleChoices={handleChoices}/>
    return (
        <>
            {price}
        </>
    );
}

export default PriceDecide;