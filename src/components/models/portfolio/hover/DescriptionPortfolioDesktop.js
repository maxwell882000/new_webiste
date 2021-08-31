import React from 'react';
import DescriptionPortfolio from "./DescriptionPortfolio";

function DescriptionPortfolioDesktop({title , body, width}) {
    const style = {
        position:"absolute",
        bottom:10,

    }
    return (
        <DescriptionPortfolio title={title} body={body} width={width} additional_style={style}/>
    );
}

export default DescriptionPortfolioDesktop;