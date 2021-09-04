import React from 'react';

function Images({
                    flex = "",
                    borderRadiusBottomOff = false,
                    heightBox = "18rem", width = "100%", height = "100%", src
                }, ref) {

    const style = {
        height: heightBox,
        flex: flex,
        overflow: "hidden",
    }
    if (borderRadiusBottomOff) {
        style.borderBottomLeftRadius = "0px";
        style.borderBottomRightRadius = "0px";
    }
    return (
        <div   ref={ref}  className="image-portfolio" style={style}>
            <img style={{
                width: width,
                height: height,
            }} src={src}>
            </img>
        </div>
    );
}

export default React.forwardRef(Images);