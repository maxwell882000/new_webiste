import React from 'react';
import {css, StyleSheet} from 'aphrodite';
import HelloAndImage from "./HelloAndImage";
import Cartegories from "./Categories";


const Main = (props, ref) => {

    const style = StyleSheet.create({
        root:{

        },
        spaceHeight: {
            "margin-bottom": "2.5%",
        }
    })

    return (
        <div ref={ref} className={css(style.root)}>

            <div className="body global-margin">
                <HelloAndImage/>
                <div className={css(style.spaceHeight)}/>
                <Cartegories/>
            </div>
        </div>
    );
};

export default React.forwardRef(Main);
