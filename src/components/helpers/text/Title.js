import React from 'react';
import Text from "./Text";

function Title({title ,center = false}) {
    return (
        <>
            <Text text={title} fontWeight={700} center={center?"center":""} color="#121212" size="3rem"></Text>
        </>
    );
}

export default Title;