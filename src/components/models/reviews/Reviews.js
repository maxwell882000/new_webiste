import React, {useState} from 'react';
import Title from "../../helpers/text/Title";
import Comments from "./Comments";
import Buttons from "../../helpers/Buttons";
import {useMediaQuery} from "react-responsive";
import {RESPONSIVE} from "../../../responsive/Responsive";
import Modal from 'react-modal';
import ModalRemainReview from "./modal/ModalRemainReview";

function Reviews(props, ref) {
    function margin(margin) {
        return <div style={{
            marginBottom: margin + "%"
        }}/>

    }
    const mobile = useMediaQuery(
        RESPONSIVE.MOBILE
    )
    const heightButton = mobile ? "3rem" : undefined;
    const widthButton = mobile ? "16rem" : "14rem";
    const [isModalOpen, openModal] = useState(false);

    return (
        <div ref={ref} className="body global-margin">
            <div className="col alItCenter">
                {margin("8")}
                <Title title={"Отзывы клиентов"}/>
                <Comments/>
                {margin("4")}
                <Buttons onClick={() => openModal(true)} nameOfButton={"Оставить Коментарий"} height={heightButton}
                         width={widthButton}/>
                <ModalRemainReview state={[isModalOpen, openModal]}/>
            </div>
        </div>
    );
}

export default React.forwardRef(Reviews);