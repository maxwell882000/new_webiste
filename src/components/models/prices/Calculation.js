import React from 'react';

import {useMediaQuery} from "react-responsive";
import {RESPONSIVE} from "../../../responsive/Responsive";

import PriceDecide from "./price/PriceDecide";
import Services from "./service/Services";

function Calculation({handleChoices}) {
    const mobile = useMediaQuery(RESPONSIVE.MOBILE);
    const styleContainer = !mobile ? "row" : "col alItCenter";
    return (
        <>
            <div className={styleContainer}>
                <Services handleChoices={handleChoices}/>
                <PriceDecide handleChoices={handleChoices}/>
            </div>
        </>

    );
}

export default Calculation;