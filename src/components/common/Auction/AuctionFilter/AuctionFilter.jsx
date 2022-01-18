import React, {useState} from 'react'
import styles from './AuctionFilter.module.css'
import AuctionModal from "../Modal/AuctionModal";
import {useDispatch} from "react-redux";
import {thunkFilterItemsAction} from "../../../../redux/actions/thunks/auction/thunkFilterItemsAction";

const AuctionFilter = () => {
    const [modalActive, setModalActive] = useState(false)
    const dispatch = useDispatch()

    function changeHandler(e) {
        e.preventDefault()
        console.log(e.target.value)
        dispatch(thunkFilterItemsAction(e.target.value))
    }

    return (
        <>
            <div className={styles['auction-filter-wrapper']}>
                <div className={styles['auction-actions']}>
                    <select onChange={changeHandler} id="cars" name="type" form="type">
                        <option value="weapon">weapon</option>
                        <option value="necklace">necklace</option>
                        <option value="ring">ring</option>
                        <option value="sphere">sphere</option>
                        <option value="body">body</option>
                        <option value="head">head</option>
                        <option value="legs">legs</option>
                    </select>

                </div>
                <div className="GamePage">

                </div>
                <button className="open-btn btn"
                        onClick={() => setModalActive(true)}
                        title={'Choose item'}>
                    Choose item
                </button>
                <AuctionModal active={modalActive} setActive={setModalActive}/>
                {/*<AuctionButton onClick={() => setModalActive(true)} title={'Choose item'}/>*/}

            </div>
        </>
    )
}

export default AuctionFilter