import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ConfirmModal = ({ showModal, hideModal, handleOnClickConfirm, id, header, message }) => {
    return (
        <>
            <Modal
                show={showModal}
                onHide={hideModal}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{header}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {message}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={hideModal}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => handleOnClickConfirm(id)}>Confirm</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ConfirmModal
