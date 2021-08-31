import React from 'react';

import Title from "../../../helpers/text/Title";
import Text from "../../../helpers/text/Text";
import Buttons from "../../../helpers/Buttons";
import person from "../../../../image/person_icon.svg";
import email from "../../../../image/email.svg"
import CustomModel from "../../../helpers/CustomModel";
function ModalRemainReview({state}) {
    const style = {
        padding:"2rem",
        margin:"auto auto"
    }
    const [isModalOpen, openModal] = state;
    return (
        <CustomModel state={state}>
        <div  style={style}>
            <div className="col ">
                <Title title={"Комментарий"} center={true}/>
                <br/>
                <input className="name" placeholder={"Полное Имя"} />

                <input className="email" placeholder={"Профессия"} />

                <textarea  style={{
                    resize:"none"
                }} placeholder="Оставить комментарий"/>
                <br/>
                <Buttons onClick={()=>openModal(false)} nameOfButton="Отправить комментарий" width="" height="2.3rem"/>
            </div>
        </div>
        </CustomModel>
    );
}

export default ModalRemainReview;