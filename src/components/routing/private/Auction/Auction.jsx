import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    THUNK_ACTION_getTraderItems,
    thunkGetAllAuctionItemsAction
} from '../../../../redux/actions/thunks/auction/thunkGetAllAuctionItemsAction'
import AuctionFilter from '../../../common/Auction/AuctionFilter/AuctionFilter'
import AuctionItem from '../../../common/Auction/AuctionItem/AuctionItem'
import styles from './Auction.module.css'
import TraderItem from './TraderItem/TraderItem'

const Auction = () => {
    const dispatch = useDispatch()
    const auctionItems = useSelector(state => state.auctionItems)
    const playerInventory = useSelector(state => state.playerInventory)
    const traderItems = useSelector(state => state.traderItems)
    const [change, setChange] = useState(false)
    useEffect(() => {
        dispatch(thunkGetAllAuctionItemsAction())
    }, [playerInventory])
    useEffect(() => {
        dispatch(THUNK_ACTION_getTraderItems())
    }, [])

    const traderHandler = e => setChange(false)
    const auctionHandler = e => setChange(true)

    return (
        <div>
            <div>
                {change && (<div className={styles['auction-wrapper']}>
                    <div className={styles['auction-filter']}>
                        <button onClick={traderHandler}>Go to Trader</button>
                        <AuctionFilter/>
                    </div>

                    <div className={styles['auction-items']}>
                        {auctionItems && auctionItems.map(e => {
                            return <AuctionItem item={e}/>
                        })}

                    </div>
                </div>)}
            </div>
            <div>
                {!change && (<div className={styles['auction-wrapper']}>
                    <div className={styles['auction-filter']}>
                        <button onClick={auctionHandler}>Go to Auction</button>
                    </div>

                    <div className={styles['auction-items']}>
                        <div>
                            {traderItems && traderItems.assassin.assassin_common.map(e => {
                                return <TraderItem item={e}/>
                            })}
                            {traderItems && traderItems.assassin.assassin_uncommon.map(e => {
                                return <TraderItem item={e}/>
                            })}
                            {traderItems && traderItems.assassin.assassin_rare.map(e => {
                                return <TraderItem item={e}/>
                            })}
                        </div>
                        <div>
                            {traderItems && traderItems.monk.monk_common.map(e => {
                                return <TraderItem item={e}/>
                            })}
                            {traderItems && traderItems.monk.monk_uncommon.map(e => {
                                return <TraderItem item={e}/>
                            })}
                            {traderItems && traderItems.monk.monk_rare.map(e => {
                                return <TraderItem item={e}/>
                            })}
                        </div>
                        <div>
                            {traderItems && traderItems.warrior.warrior_common.map(e => {
                                return <TraderItem item={e}/>
                            })}
                            {traderItems && traderItems.warrior.warrior_uncommon.map(e => {
                                return <TraderItem item={e}/>
                            })}
                            {traderItems && traderItems.warrior.warrior_rare.map(e => {
                                return <TraderItem item={e}/>
                            })}
                        </div>


                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Auction