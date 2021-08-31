import React from 'react';
import {useMediaQuery} from "react-responsive";
import {RESPONSIVE} from "../../../responsive/Responsive";
import ScrollButton from "./ScrollButton";
import {Axis} from "./helperScrollClass";


function Scrolling({paginate, axis = Axis.HORIZONTAL}) {
    const mobile = useMediaQuery(
        RESPONSIVE.MOBILE
    )
    const responsive = axis === Axis.HORIZONTAL ? "row jccenter" : "";
    console.log(`PAGINATION ${paginate.lastPage}`);
    const max = paginate.lastPage;
    const list = [];
    for (let i = 0; i <= max; i++) {
        list.push(
            <ScrollButton key={i} onClick={() => {
                paginate.goPageDecide(i);
            }} axis={axis} selected={i===paginate.currentPage}/>
        )
    }
    return (
        <div className={responsive}>
            {list}
        </div>
    );
}

export default Scrolling;
