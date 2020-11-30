import React from 'react';
import { Button, Modal } from "react-bootstrap";
import { MacroBrosIcon } from "./MacroBrosIcon";
import { Link } from "react-router-dom";
import { ContactR } from "./Routes";

export const ConfirmationModal = (props) => {

    const { callback, field, onHide, show } = props;
    const iconProps = {
        strokeColor: '#000000'
    };

    return (
        <Modal
            show={ show }
            onHide={ onHide }
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton style={ { border: 'none' } }/>
            <Modal.Body>
                <div className='d-flex flex-column align-items-center text-center' style={ { width: '100%' } }>
                    <div className='mb-3' style={ { height: '75px', width: '75px' } }>
                        <MacroBrosIcon props={ iconProps }/>
                    </div>
                    <h4>We're sorry to see you go!</h4>
                    <p className='px-3'>
                        If you have a minute please <Link to={ ContactR.CONTACT }> let us know </Link>
                        what we can do to improve your experience we would greatly appreciate it.
                        Thank you for being a part of the MacroBros community!
                    </p>
                </div>
            </Modal.Body>
            <Modal.Footer className='mb-3' style={ { border: 'none' } }>
                <div className='d-flex justify-content-center mb-3' style={ { width: '100%' } }>
                    <Button className='px-5'
                            onClick={ () => {
                                callback(field);
                                onHide();
                            } }
                    >
                        CLOSE ACCOUNT
                    </Button>
                </div>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmationModal;