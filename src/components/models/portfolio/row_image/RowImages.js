import React, {useState} from 'react';
import {useMediaQuery} from "react-responsive";
import {RESPONSIVE} from "../../../../responsive/Responsive";
import Scrolling from "../../../helpers/scroll/Scrolling";
import Paginate from "../../../helpers/scroll/Paginate";
import MobileImages from "./mobile/MobileImages";
import DesktopImages from "./desktop/DesktopImages";
import {Axis} from "../../../helpers/scroll/helperScrollClass";


function RowImages({portfolios}) {
    const isMobile = useMediaQuery(
        RESPONSIVE.MOBILE
    )
    const responsive = isMobile ? "col alItCenter" : "row alItCenter";
    const componentList = portfolios.map(
        (element, index) => {
            if (isMobile) {
                return <MobileImages key={index} portfolio={element}/>;
            }
            return <DesktopImages key={index} portfolio={element}/>
        }
    );
    const paginate = new Paginate(componentList.length, useState(0));
    return (
        <div onDrag={(event)=>{
            console.log(event);
        }}>
            <div className={responsive}>
                {componentList.filter((i, number) => number === paginate.currentPage)}
                <Scrolling   axis={isMobile? Axis.HORIZONTAL : Axis.VERTICAL} paginate={paginate} onClick={() => {}}/>
            </div>
        </div>
    );
}

export default RowImages;