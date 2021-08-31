import React from 'react';
import TextHover from "./text/TextHover";

function ListServices({paginate}) {
    function textEmphasize(choice, text, onClick) {
        if (choice) {
            return <TextHover onClick={onClick} text={text} color="#D24A6A" fontWeight={700} size="2rem"/>
        }
        return <TextHover onClick={onClick} text={text} color="#121212" fontWeight={400} size="1.4rem"/>
    }

    const text = [
        {
            title: "Cайты"
        },
        {
            title: "SMM"
        },
        {
            title: "Приложения"
        },
        {
            title: "Дизайн"
        },
    ]
    const components = text.map((title, i) => {
        return (
            <div key={i} style={{
                marginLeft: "3%"
            }}>
                {textEmphasize(paginate.isSelected(i), title.title, () => paginate.goPageDecide(i))}

            </div>)
    });
    for (let i = 0; i < text.length; i++) {
        components.push(

        )
    }
    return (
        <div className="row" style={{
            flex: 0.4,
            alignItems: "flex-end"
        }}>
            {components}
        </div>
    );
}

export default ListServices;