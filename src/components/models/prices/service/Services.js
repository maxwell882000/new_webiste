import React from 'react';
import {useMediaQuery} from "react-responsive";
import {RESPONSIVE} from "../../../../responsive/Responsive";
import ServicePhone from "./mobile/ServicePhone";
import ServiceDesktop from "./desktop/ServiceDesktop";

function Services({handleChoices}) {


    const mobile = useMediaQuery(RESPONSIVE.MOBILE);

    const desktop = !mobile;

    const service = desktop ? <ServiceDesktop handleChoices={handleChoices} /> :
        <ServicePhone handleChoices={handleChoices}/>
    return (
        <>
            {service}
        </>

    );
}

export default Services;