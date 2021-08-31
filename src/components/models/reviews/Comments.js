import React, {useState} from 'react';
import Comment from "./Comment";
import {css, StyleSheet} from 'aphrodite';
import {useMediaQuery} from "react-responsive";
import {RESPONSIVE} from "../../../responsive/Responsive";
import Scrolling from "../../helpers/scroll/Scrolling";
import Paginate from "../../helpers/scroll/Paginate";
import {StoreReviews} from "./store/StoreReviews";


function    Comments(props) {
    const style = StyleSheet.create({
        edgesMargin: {
            marginRight: "10%",
            marginLeft: "10%",
            marginTop: "2.5%"
        }
    });
    const mobile = useMediaQuery(
        RESPONSIVE.MOBILE
    )

    const [componentList, paginate] = returnCommentsAndPaginate(mobile, useState(0));
    return (
        <>
            <div className={css(style.edgesMargin) + " row"}>{componentList}</div>
            <Scrolling paginate={paginate}/>
        </>
    );
}

function returnCommentsAndPaginate(mobile, state) {

    const paginate = new Paginate(calculateLengthOfComments(mobile), state);
    const componentList = returnComments(mobile, paginate.currentPage);
    return [componentList, paginate];
}



function calculateLengthOfComments(mobile) {
    const lengthPhone = StoreReviews.length;
    const lengthDesktop = lengthPhone / 2;
    return mobile ? lengthPhone : lengthDesktop;
}

function returnComments(isMobile, page) {
    if (isMobile) {
        return [
            giveComponent(StoreReviews[page], StoreReviews[page].id)
        ]
    } else {
        const realPage = page * 2;
        return [
            giveComponent(StoreReviews[realPage], StoreReviews[realPage].id),
            giveComponent(StoreReviews[realPage + 1], StoreReviews[realPage + 1].id)
        ]
    }
}

function giveComponent(props, index) {
    return <Comment key={index} {...props}/>;
}




export default Comments;

