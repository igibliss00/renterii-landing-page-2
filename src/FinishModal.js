import React from 'react'
import Modal from 'react-modal'

import './style/FinishModal.css'

const FinishModal = ({ isOpen, setFinishModal }) => {    
    const closeModal = () => {
        setFinishModal(false)
    }

    return (
        <Modal
            isOpen={isOpen}
            contentLabel="FinishModal"
            className="finish-modal"               
            ariaHideApp={false}
            overlayClassName="overlay"                
        >
            <button 
                onClick={closeModal}
                className="text-box"
            >
                THANK YOU!
            </button>
        </Modal>
    )
}

export default FinishModal