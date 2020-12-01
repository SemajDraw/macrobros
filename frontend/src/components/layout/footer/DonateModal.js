import React, { useState } from 'react';
import { Button, Modal } from "react-bootstrap";
import { MacroBrosIcon } from "../../common/MacroBrosIcon";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Footer.scss';
import ReactTooltip from "react-tooltip";

export const DonateModal = (props) => {

    const [state, setState] = useState({
        bitcoin: {
            address: 'bitcoinaddress',
            copied: false
        },
        ethereum: {
            address: 'ethereumaddress',
            copied: false
        }
    });

    const { onHide, show } = props;
    const iconProps = {
        id: 'donate-icon',
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
                    <h4>Contribute to MacroBros</h4>
                    <p className='px-4'>
                        If you found the content we provide useful please consider donating. It helps to keep up
                        producing
                        quality content for you. We greatly appreciate any contribution you can make no matter how big
                        or how small. Cheers from the Bros!
                    </p>
                    <div className='d-flex flex-column mt-3 mb-4' style={ { width: '100%' } }>
                        <CopyToClipboard text={ state.bitcoin.address }
                                         onCopy={ () => setState({ bitcoin: { ...state, copied: true }, ...state }) }>
                            <span>
                                <h5 style={{display: 'inline'}}>Bitcoin:</h5> { state.bitcoin.address }
                                <Button className='copy-btn' variant='link' data-event='click' data-tip='copied'>
                                    <FontAwesomeIcon size='xs' icon={ faCopy }/>
                                </Button>
                            </span>
                        </CopyToClipboard>
                        <CopyToClipboard text={ state.ethereum.address }
                                         onCopy={ () => setState({ ethereum: { ...state, copied: true }, ...state }) }>
                            <span>
                                <h5 style={{display: 'inline'}}>Ethereum:</h5> { state.ethereum.address }
                                <Button className='copy-btn' variant='link' data-event='click' data-tip='copied'>
                                    <FontAwesomeIcon size='xs' icon={ faCopy }/>
                                </Button>
                            </span>
                        </CopyToClipboard>
                    </div>
                    <ReactTooltip type='dark' effect='solid' globalEventOff='click'/>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default DonateModal;