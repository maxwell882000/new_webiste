import React, {useEffect, useRef, useState} from 'react';
import {useContainerDimensions} from "../../../../helpers/hooks/useContainerDimensions";
import ServiceButton from "../ServiceButton";
import ServiceText from "../ServiceText";
import {styleForServicePhone} from "./styleForServicePhone";

function getServiceText(handleChoices, ref) {
    const pricesList = handleChoices.providePricesList();
    return pricesList.map((element, index) => {
        let style = null;
        if (index === pricesList.length - 1) {
            style = styleForServicePhone();
            style.borderBottom = "0px";
        }
        return (
            <ServiceText ref={ref} additionalStyle={style} key={element.id} id={element.id}
                         title={element.title}
                         price={element.price}
                         handleChoices={handleChoices}/>
        )
    });
}

function getHeight(height, length) {

    const fourComponentHeight = height * 4 + "px";
    return length > 4 && height!==0 ? fourComponentHeight : "";
}
function checkIfScrollable(handleChoices){
    return handleChoices.providePriceListLength() > 4 ? "scroll" : null;
}
function ServicePhone({handleChoices}) {
    const buttonRef = useRef(null);
    const servicesRef = useRef(null);
    const widthButton = useContainerDimensions(buttonRef).width;
    const heightServices = useContainerDimensions(servicesRef).height;
    const components = getServiceText(handleChoices, servicesRef);
    const [isServicesHidden, hideServices] = useState(false);
    useEffect(() => hideServices(true), []);

    return (
        <div style={{
            overflow: "hidden"
        }}>
            <ServiceButton onClick={() => {
                hideServices(!isServicesHidden);
                console.log(heightServices);
                console.log(handleChoices.providePriceListLength());
            }} ref={buttonRef}/>
            <div style={{
                position: "absolute",
                zIndex: 1,
            }}>
                <div style={{
                    backgroundColor: "white",
                    width: widthButton,
                    borderRadius: "10px",
                    overflowX: "hidden",
                    overflowY:checkIfScrollable(handleChoices),
                    height: getHeight(heightServices, handleChoices.providePriceListLength()),
                    border: "1px solid #EAE9F2",
                }} hidden={isServicesHidden}>
                        {components}
                </div>
            </div>
        </div>
    );
}

export default ServicePhone;