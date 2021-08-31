import React from 'react';
import ListServices from "./ListServices";

import Title from "./text/Title";
import {useMediaQuery} from "react-responsive";
import {RESPONSIVE} from "../../responsive/Responsive";

function TitleAndServices({title , paginate}) {
    const style = {
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: '8%',
    }
    const mobile = useMediaQuery(
        RESPONSIVE.MOBILE
    )
    const responsive = mobile ? "col" : "row";
    return (
        <div className={responsive} style={style}>
            <div style={{
                flex: 0.35,
            }}>
                <Title title={title}/>
            </div>

            <ListServices  paginate={paginate}/>
        </div>
    );
}

export default TitleAndServices;