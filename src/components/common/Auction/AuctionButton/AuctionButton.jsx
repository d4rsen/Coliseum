import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { thunkBuyItemAction } from '../../../../redux/actions/thunks/auction/thunkBuyItemAction'
import { thunkPostAuctionItemAction } from '../../../../redux/actions/thunks/auction/thunkPostAuctionItemAction'
import styles from './AuctionButton.module.css'

const AuctionButton = ({title, itemId, price, setPrice}) => {

    const dispatch = useDispatch()
    const playerId = useSelector(state => state.player.id)

    function orderHandler(e) {
        e.preventDefault()
        if (e.target.value === 'Place lot') {
            dispatch(thunkPostAuctionItemAction({
                character_id: Number(playerId),
                item_id: Number(itemId),
                price: Number(price)
            }))
            setPrice('')
        } else if (e.target.value === 'Buy') {
            dispatch(thunkBuyItemAction({
                id: Number(itemId),
                buyer_id: Number(playerId)
            }))
        }
    }

    return (
        <div className={styles['buttons']}>
            <button onClick={orderHandler}
                    className={styles['btn']}
                    value={title}>{title}</button>
        </div>
    )
}

export default AuctionButton