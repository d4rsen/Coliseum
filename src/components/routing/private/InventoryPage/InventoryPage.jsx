import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ACTION_PlayerRegenerate } from '../../../../redux/actions/playerActions'
import { thunkAddRandomItemAction } from '../../../../redux/actions/thunks/inventory/thunkAddRandomItemAction'
import { THUNK_ACTION_getPLayerInventory } from '../../../../redux/actions/thunks/thunkGetPlayerInventoryActions'
import EmptyItem from '../../../common/EmptyItem/EmptyItem'
import Item from '../../../common/Item/Item'
import Player from '../../../common/Player/Player'
import Modal from './Modal/Modal'

const InventoryPage = () => {
    const link = 'https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/6b/f3/a6/6bf3a6b2-85de-5e23-cb92-0d739a178c53/source/512x512bb.jpg'
    const playerAvatar = 'https://www.pngall.com/wp-content/uploads/4/Samurai-PNG-Image.png'
    const dispatch = useDispatch()
    const playerInventory = useSelector(state => state.playerInventory)
    const player = useSelector(state => state.player)
    // DO NOT DELETE
    const [modalActive, setModalActive] = useState(false)
    const [chosenItem, setChosenItem] = useState('')
    // DO NOT DELETE

    useEffect(() => {
        dispatch(THUNK_ACTION_getPLayerInventory(player.id))
    }, [])

    // useEffect(() => {
    //     return () => {
    //         !playerInventory[0] && dispatch(THUNK_ACTION_getPLayerInventory(player.id))
    //     }
    // }, [dispatch])

    useEffect(() => {
        setTimeout(() => {
            dispatch(ACTION_PlayerRegenerate())
        }, 3000)
    }, [player, dispatch])

// DO NOT DELETE
    function handleClick(e) {
        console.log('E TARGET', e.target)
        console.log('ID ===>', player.total_stats.id)
        dispatch(thunkAddRandomItemAction(player.total_stats.id))
    }

// DO NOT DELETE
    return (
        <div className="container d-flex mt-4">
            <Player type={'player'}/>
            <div>
                <div onClick={handleClick}>Add Item</div>
                <div className="container d-flex flex-wrap m-0 p-0">
                    {playerInventory && playerInventory.map((item, index) =>
                        item !== null ?
                            (<div key={index} onClick={() => {
                                setChosenItem(item)
                                setModalActive(true)
                            }}><Item key={index}
                                     item={item}
                            /></div>)
                            : (<EmptyItem/>)
                    )}
                </div>
                <Modal active={modalActive} setActive={setModalActive} chosenItem={chosenItem} player={player}/>
            </div>
        </div>
    )
}

export default InventoryPage

