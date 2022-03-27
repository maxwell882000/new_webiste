import React from 'react';
import Category from "./Category";
import cards from "../../../image/cards.svg"
import doc from "../../../image/doc.svg"
import chat from "../../../image/chat.svg"
import phone from "../../../image/phone.svg"

const Cartegories = () => {
    const margin = {
        width: "2%"
    }

    return (
        <>
            <div className="row wrap">
                <Category pathToImage={cards} text="Веб-сайты" colorImageBack={"#EEEEFB"}/>
                {/*<div style={margin}/>*/}
                <Category pathToImage={doc} text="Боты" colorImageBack={"rgba(210, 74, 106, 0.2)"}/>
                {/*<div style={margin}/>*/}
                {/*<Category pathToImage={chat} text="SMM" colorImageBack={"rgba(119, 191, 65, 0.1)"}/>*/}
                {/*<div style={margin}/>*/}
                <Category pathToImage={phone} text="Приложения" colorImageBack={"rgba(254, 220, 90, 0.1)"}/>
            </div>
        </>
    );
};

export default Cartegories;
