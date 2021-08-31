import React, {useState} from 'react';
import TitleAndServices from "../../helpers/TitleAndServices";
import Calculation from "./Calculation";
import {HandleChoices} from "./choices/HandleChoices";

function Prices(props, ref) {
    const handleChoices = new HandleChoices(useState(0), useState(0), useState([]));
    return (
            <div  ref={ref} className="body global-margin">
                <TitleAndServices paginate={handleChoices.paginate} title="Вычеслить цену"/>
                <div style={{
                    marginTop: "2rem"
                }}/>
                <Calculation handleChoices={handleChoices}/>
            </div>
    );
}

export default React.forwardRef(Prices);