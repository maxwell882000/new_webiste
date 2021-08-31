import React from 'react';
import Text from "../../helpers/text/Text";
import ImageAndName from "./ImageAndName";

function Comment({name, description, prof, image}) {
    const style = {
        margin: "3%",
        width: "30rem",
        border: "1px solid #EAE9F2",
        borderRadius: "8px",
        padding: "2%"
    }
    return (
        <div style={style}>
            <Text
                text={description}/>
            <div style={{marginBottom: "10%"}}/>
            <ImageAndName name={name} prof={prof} image={image}/>
        </div>
    );
}

export default Comment;