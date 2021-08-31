import React from 'react';
import Text from "../../../helpers/text/Text";
import {css, StyleSheet} from "aphrodite";

function DescriptionPortfolio({additional_style, title, body , width ="89%"}) {
    const style = StyleSheet.create({
            main: {
                width: width,
                marginLeft:"0.5rem",
                marginRight:"0.5rem",
                backgroundColor: "white",
            }
        }
    )
    return (
        <div className={css(style.main)} style={additional_style}>
            <div style={{
                padding:"1.5rem",

            }}>
                <Text text={title} fontWeight={700}/>
                <br/>
                <Text text={body}/>
            </div>

        </div>
    );
}

export default DescriptionPortfolio;