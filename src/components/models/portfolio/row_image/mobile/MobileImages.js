import React, {useRef} from 'react';
import {useContainerDimensions} from "../../../../helpers/hooks/useContainerDimensions";
import HandleImageComponents from "./HandleImageComponents";
import DescriptionPortfolioMobile from "../../hover/DescriptionPortfolioMobile";


function MobileImages(props) {
    const ref = useRef(null);
    const {width, height} = useContainerDimensions(ref)

    return (
        <>
            <HandleImageComponents ref={ref} portfolio={props.portfolio}/>
            <DescriptionPortfolioMobile width={width - 1} body={props.portfolio.body} title={props.portfolio.title}/>
            <div style={{
                margin: "20px"
            }}/>
        </>
    );
}

export default MobileImages;