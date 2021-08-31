import React from 'react';
import {css, StyleSheet} from 'aphrodite';

function Service({children, isButton = false, containerWidth = "14rem", isPhone}, ref) {
    const outer = {
        borderRadius: "8px",
        justifyContent: "space-between",
        padding: "1.3rem",
        width: containerWidth,
        height: "1rem",
        marginBottom: "0.8rem",
    }

    // if (isPhone) {
    //
    // } else {
    //     outer.
    // }
    const style = StyleSheet.create({
        outer: outer,
    })

    return (
        <div ref={ref} className={css(style.outer) + " alItCenter row"}>
            {children}
        </div>
    );
}

export default React.forwardRef(Service);