import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ACTION_PlayerRegenerate } from '../../../../redux/actions/playerActions'
import { THUNK_ACTION_wearItemAction } from '../../../../redux/actions/thunks/inventory/thinkWearItemAction'
import { thunkAddRandomItemAction } from '../../../../redux/actions/thunks/inventory/thunkAddRandomItemAction'
import { THUNK_ACTION_getPLayerInventory } from '../../../../redux/actions/thunks/thunkGetPlayerInventoryActions'
import { THUNK_ACTION_getPlayerFromDb } from '../../../../redux/actions/thunks/thunkPlayersFromDbActions'
import BackGround from '../../../common/BackGround/BackGround'
import Character from '../../../common/Character/Character'
import './InventoryPage.scss'

const InventoryPage = () => {
    const dispatch = useDispatch()
    const playerInventory = useSelector(state => state.playerInventory)
    const player = useSelector(state => state.player)
    const user = useSelector(state => state.user)

    useEffect(() => {
        dispatch(THUNK_ACTION_getPLayerInventory(player.id))
    }, [])

    useEffect(() => {
        setTimeout(() => {
            dispatch(ACTION_PlayerRegenerate())
        }, 3000)
    }, [player, dispatch])

    const cheat = () => dispatch(thunkAddRandomItemAction(player.total_stats.id))

    const wearItem = async (item) => {
        await dispatch(THUNK_ACTION_wearItemAction(player, item))
        await dispatch(THUNK_ACTION_getPlayerFromDb(user.user.id))
        await dispatch(THUNK_ACTION_getPLayerInventory(player.id))
    }

    return (
        <div className="inventoryPage">
            <BackGround/>
            <div className="inventoryPage__left">
                <Character/>
            </div>
            <div className="inventoryPage__right">
                <div className="inventoryPage__inventory">
                    <div className="character__item-wrapper">
                        <div className="character__item">
                            <img
                                src="https://dbforgame.herokuapp.com/static/img/items/empty_cell.png"
                                alt="item"
                                className="character__item-img"
                            />
                        </div>
                        <button onClick={cheat} className="inventoryPage__button">cheat</button>
                    </div>
                    {playerInventory && playerInventory.map(item =>
                        <div className="character__item-wrapper">
                            <div className="character__item">
                                <img
                                    src={item.img}
                                    alt="item"
                                    className="character__item-img"
                                />
                            </div>
                            <button onClick={() => wearItem(item)} className="inventoryPage__button">put on</button>
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default InventoryPage
