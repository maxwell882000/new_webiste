import {styleForServicePhone} from "./styleForServicePhone";
import ServiceText from "../ServiceText";
import React, {useRef} from "react";
import {useContainerDimensions} from "../../../../helpers/hooks/useContainerDimensions";

function getHeight(height, length) {
    const oneComponentHeight = height / length;
    const fiveComponentHeight = oneComponentHeight * 5 + "px";
    return length > 1 ? fiveComponentHeight : "";
}

function ServicePhoneItems({handleChoices, widthButton, isServicesHidden}, ref) {
    const servicesRef = useRef(null);
    const heightServices = useContainerDimensions(servicesRef).height;
    const pricesList = handleChoices.providePricesList();
    return pricesList.map((element, index) => {
        let style = null;
        if (index === pricesList.length - 1) {
            style = styleForServicePhone();
            style.borderBottom = "0px";
        }
        return (
            <div style={{
                backgroundColor: "white",
                width: widthButton,
                borderRadius: "10px",
                overflowX: "hidden",
                overflowY: "scroll",
                height: getHeight(heightServices, handleChoices.providePriceListLength()),
                border: "1px solid #EAE9F2",
            }} hidden={isServicesHidden}>
                <div ref={servicesRef}>
                    <ServiceText ref={ref} additionalStyle={style} key={element.id} id={element.id}
                                 title={element.title}
                                 price={element.price}
                                 handleChoices={handleChoices}/>
                </div>
            </div>

        )
    });
}

export default React.forwardRef(ServicePhoneItems)