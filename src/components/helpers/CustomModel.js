import React from 'react';
import Modal from 'react-modal';

function    CustomModel({
                         state,
                         children
                     }) {
    const [isOpen, openOrCloseModel] = state;

    function openModel() {
        openOrCloseModel(true);
    }

    function closeModel() {
        openOrCloseModel(false);
    }

    const style = {
        content: {
            top: '50%',
            width:"35%",
            left: '50%',
            borderRadius: "10px",
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    }
    return (
        <Modal onRequestClose={closeModel} style={style} isOpen={isOpen}>{children} </Modal>
    );
}

export default CustomModel;