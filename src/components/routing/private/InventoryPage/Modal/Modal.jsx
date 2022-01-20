import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { THUNK_ACTION_wearItemAction } from '../../../../../redux/actions/thunks/inventory/thinkWearItemAction'
import {
    thunkDeleteItemFromInventoryAction
} from '../../../../../redux/actions/thunks/inventory/thunkDeleteItemFromInventoryAction'
import { THUNK_ACTION_getPLayerInventory } from '../../../../../redux/actions/thunks/thunkGetPlayerInventoryActions'
import { THUNK_ACTION_getPlayerFromDb } from '../../../../../redux/actions/thunks/thunkPlayersFromDbActions'
import './ModalInventory.scss'

function Modal({active, setActive, chosenItem, player}) {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    function handleDelete(e) {
        e.preventDefault()
        console.log(chosenItem.id)
        console.log(player.id)
        dispatch(thunkDeleteItemFromInventoryAction(chosenItem.id, player.id))
        setActive(false)
    }

    async function handleWear(e) {
        e.preventDefault()
        console.log(chosenItem)
        await dispatch(THUNK_ACTION_wearItemAction(player, chosenItem))
        await dispatch(THUNK_ACTION_getPlayerFromDb(user.user.id))
        await dispatch(THUNK_ACTION_getPLayerInventory(player.id))
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
                    <div className="buttons">
                        <button className="button" onClick={handleDelete}>Yes</button>
                        <button className="button set" onClick={handleWear}>Set item</button>
                        {/*<button className="button" onClick={handleUndo}>No</button>*/}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Modal
