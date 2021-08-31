import React from 'react';
import Text from "../../helpers/text/Text";

function ImageAndName({name, prof, image}) {
    const styleImage = {
        borderRadius: "50%",
        height: "40px",
        width: "40px",
        backgroundColor: "grey"
    }
    const styleContainer = {
        alignItems: "center"
    }
    const styleMargin = {
        margin: "2.5%"
    }
    return (
        <div className="row" style={styleContainer}>
            <div style={styleImage}>
                <img src={image} alt=""/>
            </div>
            <div style={styleMargin}/>
            <div>
                <Text text={name}/>
                <br/>
                <Text text={prof}/>
            </div>
        </div>
    );
}

export default ImageAndName;
