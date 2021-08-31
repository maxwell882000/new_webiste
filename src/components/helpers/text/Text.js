import React from 'react';
import {css, StyleSheet} from 'aphrodite';

const Text = ({
                  fontWeight = 600,
                  text,
                  color,
                  fontStyle,
                  size,
                  center,
                  hover = {
                      cursor: "default"
                  }
              }) => {

    const style = StyleSheet.create({
            spanText: {
                fontFamily: "Gilroy",
                fontWeight: fontWeight,
                color: color,
                textAlign: center,
                fontSize: size,
                fontStyle: fontStyle
            },
            addHover: {
                ":hover": hover
            }
        }
    );

    return (
        <span className={css(style.spanText, style.addHover)} onClick={() => console.log("Asdsad")}>
            {text}
        </span>
    );
};

export default Text;
