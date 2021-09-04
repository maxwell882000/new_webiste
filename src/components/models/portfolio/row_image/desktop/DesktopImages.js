import React, {useRef} from 'react';
import Images from "../../Images";
import HoverActions from "../../hover/HoverActions";
import {useContainerDimensions} from "../../../../helpers/hooks/useContainerDimensions";

function DesktopImages(props) {
    const myRefs = useRef(null);
    const { width, height } = useContainerDimensions(myRefs)
    return (
        <>
            <Images flex="0.25"  src={props.portfolio.imageFirst}/>
            <HoverActions widthChildren={width} flex={"0.5"}
                          title={props.portfolio.title} body={props.portfolio.body}
            >
                <a href={props.portfolio.link}>
                    <Images ref={myRefs} src={props.portfolio.imageSecond}/>
                </a>
            </HoverActions>
            <Images flex="0.25" src={props.portfolio.imageThird}/>
            <div style={{
                margin: "20px"
            }}/>
        </>
    );
}

export default DesktopImages;