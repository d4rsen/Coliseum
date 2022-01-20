import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AuctionButton from '../AuctionButton/AuctionButton'
import './AuctionModal.scss'

function AuctionModal({active, setActive}) {
    const dispatch = useDispatch()
    const inventory = useSelector(state => state.playerInventory)
    const [chosenItem, setChosenItem] = useState(null)
    const [price, setPrice] = useState('')
    const [curr, setCurr] = useState('')
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

    const someHandler = e => setCurr(e.target.id)

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
        <div className={active ? 'modal1 active1' : 'modal1'}
             onClick={setHandler}>
            <div className={active ? 'modal__content1' : 'modal1'}
                 onClick={propagationHandler}>
                <div style={{overflow: 'scroll', display: 'flex', flexWrap: 'wrap',}}>
                    {inventory &&
                        inventory.map(e => {
                            if (!e) {
                                return null
                            }
                            return <div style={{marginBottom: '2%', marginRight: '2%',}}
                                        onClick={clickHandler}
                                        id={e.id}>
                                <img src={e.img} onClick={someHandler} id={e.item_name}/>
                                <p>{e.price} ₲</p>
                            </div>
                        })
                    }
                </div>
                <div id="lalala" className="mb-3">
                    <label htmlFor="question"
                           className="form-label">
                        {`Choose price ₲ for : ${curr}`}
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
