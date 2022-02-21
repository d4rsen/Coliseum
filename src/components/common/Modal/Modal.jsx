import React from 'react'
import './Modal.scss'

const Modal = ({active, setActive, children}) => {
    const closeHandler = () => setActive(false)
    const propagation = (e) => e.stopPropagation()

    return (
        <div onClick={closeHandler} className={active ? 'modal modal--active' : 'modal'}>
            <div onClick={propagation} className="modal__content">
                {children}
            </div>
        </div>
    )
}

export default Modal
