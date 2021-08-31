import React from 'react';
import drop from "../../../../image/drop_down.svg"
import Text from "../../../helpers/text/Text";

function ServiceButton({name = "Выберите сервис", onClick , showChoices}, ref) {
    return (
        <div ref={ref} className="service alItCenter row" style={{
            width: "20rem",
            borderRadius:"8px",
        }} onClick={onClick}>
            <Text text={name} color="#696871" size={"1.3rem"} fontWeight={400} />
            {<img src={drop} alt=""/>}
        </div>

    );
}

export default React.forwardRef(ServiceButton);
