import React, {useCallback, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import AuctionButton from '../AuctionButton/AuctionButton'

function AuctionModal({active, setActive}) {
    const dispatch = useDispatch()
    const inventory = useSelector(state => state.playerInventory)
    const [chosenItem, setChosenItem] = useState(null)
    const [price, setPrice] = useState('')
    // useEffect(() => {
    //     dispatch(THUNK_ACTION_getPLayerInventory())
    // }, [dispatch])

    function inputHandler(e) {
        e.preventDefault()
        setPrice(e.target.value)
        console.log(price)
    }

    function clickHandler(e) {
        e.preventDefault()
        console.log(e.target.id)
        setChosenItem(e.target.id)
    }

    function priceHandler(e) {
        setPrice('')
    }

    const setHandler = useCallback(() => {
        setActive(false)
    }, [setActive])

    const propagationHandler = useCallback((e) => {
        e.stopPropagation()
    }, [])
    console.log(inventory)

    return (
        <div className={active ? 'modal active' : 'modal'}
             onClick={setHandler}>
            <div className={active ? 'modal__content' : 'modal'}
                 onClick={propagationHandler}>
                <div>
                    {inventory &&
                        inventory.map(e => {
                            if (!e) {
                                return null
                            }
                            return <div onClick={clickHandler}
                                        id={e.id}>
                                {e.item_name}
                            </div>
                        })
                    }
                </div>
                <div id="lalala" className="mb-3">
                    <label htmlFor="question"
                           className="form-label">
                        Choose price:
                    </label>
                    <input type="text"
                           onChange={inputHandler}
                           className="form-control"
                           id="exampleInputName"
                           value={price}/>
                </div>
                <AuctionButton title={'Place lot'}
                               itemId={chosenItem}
                               price={price}
                               setPrice={setPrice}/>
            </div>
        </div>

    )
}

export default AuctionModal
