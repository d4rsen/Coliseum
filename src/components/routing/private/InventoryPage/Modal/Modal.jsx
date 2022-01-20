import React from 'react'
import {useDispatch} from 'react-redux'
import {thunkDeleteItemFromInventoryAction} from '../../../../../redux/actions/thunks/inventory/thunkDeleteItemFromInventoryAction'
import './ModalInventory.scss'

function Modal({active, setActive, chosenItem, player}) {

    const dispatch = useDispatch()

    function handleDelete(e) {
        e.preventDefault()
        console.log(chosenItem.id)
        console.log(player.id)
        dispatch(thunkDeleteItemFromInventoryAction(chosenItem.id, player.id))
        setActive(false)
    }

    function handleWear(e) {
        e.preventDefault()
        console.log(chosenItem)
        console.log(player)
    }

    function handleUndo(e) {
        e.preventDefault()
    }

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal__content' : 'modal'} onClick={e => e.stopPropagation()}>
                <div className="main_modal">
                    <div className="meta_info_modal">
                        <label htmlFor="chosenItem" className="form-label">{chosenItem.item_name}</label>
                        <p>Are you sure about that?</p>
                    </div>
                    <div className='buttons'>
                        <button className="button" onClick={handleDelete}>Yes</button>
                        <button className="button set" onClick={handleWear}>Set item</button>
                        <button className="button" onClick={handleUndo}>No</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Modal
