import React, {useState} from 'react';
import {css, StyleSheet} from "aphrodite";
import DescriptionPortfolioDesktop from "./DescriptionPortfolioDesktop";

function HoverActions({children, widthChildren,flex ="" , title , body}) {
    const [isHover, setHover] = useState(false);

    function onMouseEnter() {
        setHover(true);
    }

    function onMouseLeave() {
        setHover(false);
    }

    const style = StyleSheet.create({
        container: {
            flex: flex,
            position: "relative",

        },
        hover: {
            ":hover": {
                cursor: "pointer",
            }
        }
    })
    return (
        <div className={css(style.container, style.hover)} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {children}
            {isHover && <DescriptionPortfolioDesktop width={widthChildren} title={title} body={body}/>}
        </div>
    );
}

export default HoverActions;