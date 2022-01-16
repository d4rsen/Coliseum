import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {THUNK_ACTION_getPLayerInventory} from '../../../../redux/actions/thunks/thunkGetPlayerInventoryActions'
import EmptyItem from '../../../common/EmptyItem/EmptyItem'
import Item from '../../../common/Item/Item'
import Player from '../../../common/Player/Player'

const InventoryPage = () => {
    const link = 'https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/6b/f3/a6/6bf3a6b2-85de-5e23-cb92-0d739a178c53/source/512x512bb.jpg'
    const playerAvatar = 'https://www.pngall.com/wp-content/uploads/4/Samurai-PNG-Image.png'
    const dispatch = useDispatch()
    const playerInventory = useSelector(state => state.playerInventory)
    const player = useSelector(state => state.player)

    useEffect(() => {
        !playerInventory[0] && dispatch(THUNK_ACTION_getPLayerInventory())
    }, [dispatch])

    return (
        <div className="container d-flex mt-4">
            <Player/>
            <div>
                <div className="container d-flex flex-wrap m-0 p-0">
                    {playerInventory && playerInventory.map(item =>
                        item !== null ? (<Item item={item}/>) : (<EmptyItem/>)
                    )}
                </div>
            </div>
        </div>
    )
}

export default InventoryPage

