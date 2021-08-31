import React from 'react';
import {css, StyleSheet} from 'aphrodite';
import {Axis, HelperScrollClass} from "./helperScrollClass";


function ScrollButton({selected = false, axis = Axis.VERTICAL, onClick}) {
    const mainAxisActive = "3rem";
    const mainAxisInActive = "1.8em";
    const crossAxis = "0.35rem";
    const style = StyleSheet.create({
        common: {
            borderRadius: "8px",
        },
        vertical: {
            marginBottom: '0.5rem',
            width: crossAxis,
        },
        horizontal: {
            marginLeft: '0.5rem',
            height: crossAxis,
        },
        active: {
            backgroundColor: "#5454D4"
        },
        activeHorizontal: {
            width: mainAxisActive
        },
        activeVertical: {
            height: mainAxisActive,
        },
        inactive: {
            backgroundColor: "#EAE9F2"
        },
        inactiveVertical: {
            height: mainAxisInActive,
        },
        inactiveHorizontal: {
            width: mainAxisInActive,
        },
        addHover: {
            ":hover": {}
        }
    });
    const helper = new HelperScrollClass(style, selected);
    helper.addCommonStyling();
    const usedAxis = css(helper.addStylingWhichDependsOnAxis(axis))

    return (
        <div className={usedAxis} onClick={onClick}/>
    );
}

export default ScrollButton;
