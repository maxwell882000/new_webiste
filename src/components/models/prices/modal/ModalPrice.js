import React from 'react';
import CustomModel from "../../../helpers/CustomModel";
import Title from "../../../helpers/text/Title";
import Buttons from "../../../helpers/Buttons";
import Text from "../../../helpers/text/Text";

function ModalPrice({state, allPrices}) {
    const style = {
        padding: "2em",
        margin: "auto auto"
    }
    const [isModalOpen, openModal] = state;
    return (
        <CustomModel state={state}>
            <div style={style}>
                <div className="col ">
                    <Title title={"Запрос"} center={true}/>
                    <Text/>
                    <br/>
                    <input className="name" placeholder={"Полное Имя"}/>

                    <input className="email" placeholder={"Электронная почта"}/>
                    <br/>
                    <Buttons onClick={() => openModal(false)} nameOfButton="Отправить запрос" width="" height="2.3rem"/>
                </div>
            </div>
        </CustomModel>
    );
}

export default ModalPrice;