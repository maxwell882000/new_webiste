import React from 'react';
import DescriptionPortfolio from "./DescriptionPortfolio";

function DescriptionPortfolioMobile({title , body, width}) {
    const style = {
        border: "1px solid #979797",
        borderBottomRightRadius: "8px",
        borderBottomLeftRadius: "8px",
        marginTop: "-2.3rem"
    }
    return (
        <DescriptionPortfolio title={title} body={body} width={width} additional_style={style}/>
    );
}

export default DescriptionPortfolioMobile;