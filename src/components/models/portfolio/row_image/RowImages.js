import React, {useEffect, useState} from 'react';
import {useMediaQuery} from "react-responsive";
import {RESPONSIVE} from "../../../../responsive/Responsive";
import Scrolling from "../../../helpers/scroll/Scrolling";
import Paginate from "../../../helpers/scroll/Paginate";
import MobileImages from "./mobile/MobileImages";
import DesktopImages from "./desktop/DesktopImages";
import {Axis} from "../../../helpers/scroll/helperScrollClass";


function RowImages({portfolios , provideCallBack}) {
    const isMobile = useMediaQuery(
        RESPONSIVE.MOBILE
    )
    const responsive = isMobile ? "col alItCenter" : "row alItCenter";

    const componentList = portfolios.map(
        (element, index) => {
            if (isMobile) {
                return <MobileImages key={element.id} portfolio={element}/>;
            }
            return <DesktopImages key={element.id} portfolio={element}/>
        }
    );
    const paginate = new Paginate(componentList.length, useState(0));
    // parent state was changed so we are forcing to change state of children
    provideCallBack.callBackWhenChanged = ()=>{paginate.setCurrentPage(0)};


    return (
        <div>
            <div className={responsive}>
                {componentList.filter((i, number) => number === paginate.currentPage)}
                <Scrolling   axis={isMobile? Axis.HORIZONTAL : Axis.VERTICAL} paginate={paginate} onClick={() => {}}/>
            </div>
        </div>
    );
}

export default RowImages;