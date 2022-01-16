import React from 'react'
import {useDispatch} from 'react-redux'
import styles from './AuctionButton.module.css'

const AuctionButton = ({title, itemId, price, setPrice}) => {

    const dispatch = useDispatch()

    function orderHandler(e) {
        e.preventDefault()
        console.log(e.target.value)
        if (e.target.value === 'Place lot') {
            console.log('LOT PLACER')
            console.log('item id: ', itemId)
            console.log('price: ', price)

            // dispatch(thunkPostAuctionItem({character_id: 1, item_id: Number(itemId), price: Number(price)}))
            // setPrice('')
        } else if (e.target.value === 'Buy') {
            console.log('BUY id:', itemId)
        }
    }

    return (
        <div className={styles['buttons']}>
            <button onClick={orderHandler} className={styles['btn']} value={title}>{title}</button>
        </div>
    )
}

export default AuctionButton