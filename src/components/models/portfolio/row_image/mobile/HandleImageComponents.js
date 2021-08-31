import Images from "../../Images";
import React, {useState} from "react";
import Paginate from "../../../../helpers/scroll/Paginate";


function HandleImageComponents({portfolio},refs) {
    const paginate = new Paginate(3, useState(0))
    const listImages = [
        portfolio.imageFirst,
        portfolio.imageSecond,
        portfolio.imageThird
    ];

    function getImages(image, i) {
        return (
            <div key={i} onClick={() => paginate.goPageDecide(i)}>
                <Images ref={provideRefLastImage(i)} heightBox={selectedImage(i)} height={""}
                        borderRadiusBottomOff={removeRadiusForLastImage(i)} src={image}/>
            </div>
        )
    }

    function provideRefLastImage(index) {
        return index === 2 ? refs : null;
    }

    function removeRadiusForLastImage(index) {
        return index === 2;
    }

    function selectedImage(index) {
        return paginate.isSelected(index) ? "18rem" : "5rem";
    }

    return (
        <>
            {listImages.map(getImages)}
        </>
    );
}
export  default React.forwardRef(HandleImageComponents);

