import React from 'react';
import Text from "../../helpers/text/Text";

function IconAndText({icon, text}) {

    return (
        <>
            <div style={{
                marginBottom: "4%"
            }}/>

            <div className="row alItCenter">

                <div>
                    <img src={icon} style={{width: "70%"}}/>
                </div>
                <div>
                    <Text text={text} fontWeight={400} size={"0.9rem"}/>
                </div>

            </div>
        </>
    );
}

export default IconAndText;