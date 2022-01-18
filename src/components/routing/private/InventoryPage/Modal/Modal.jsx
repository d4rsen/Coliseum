import React from 'react'
import { useDispatch } from 'react-redux'
import {
    thunkDeleteItemFromInventoryAction
} from '../../../../../redux/actions/thunks/inventory/thunkDeleteItemFromInventoryAction'
import './Modal.css'

function Modal({active, setActive, chosenItem, player}) {

    const dispatch = useDispatch()

    function handleDelete(e) {
        e.preventDefault()
        console.log(chosenItem.id)
        console.log(player.id)
        dispatch(thunkDeleteItemFromInventoryAction(chosenItem.id, player.id))
        setActive(false)
    }

    function handleUndo(e) {
        e.preventDefault()
    }

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal__content' : 'modal'} onClick={e => e.stopPropagation()}>
                <div id="lalala" className="mb-3">
                    <label htmlFor="chosenItem" className="form-label">{chosenItem.item_name}</label>
                    <p>Are you sure about that?</p>
                    <button onClick={handleDelete}>Yes</button>
                    <button>Set item</button>
                    <button onClick={handleUndo}>No</button>
                </div>
            </div>
        </div>

    )
}

export default Modal
