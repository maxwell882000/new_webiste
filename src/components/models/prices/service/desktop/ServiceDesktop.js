import React from 'react';
import ServiceText from "../ServiceText";

function ServiceDesktop({handleChoices}) {
    const components =  handleChoices.providePricesList().map((element, index) => {
        return (
            <ServiceText key={element.id} id={element.id} title={element.title} price={element.price}
                         handleChoices={handleChoices}/>
        )
    });
    return (
        <div className="row" style={{
            flex: "2",
            alignContent: "flex-start",
            flexWrap: "wrap"
        }}>
            {components}
        </div>
    );
}

export default ServiceDesktop;