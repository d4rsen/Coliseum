import React, { useState } from 'react'
import styles from './AuctionFilter.module.css'

const AuctionFilter = () => {
    const [modalActive, setModalActive] = useState(false)

    function changeHandler(e) {
        e.preventDefault()
        console.log(e.target.value)
    }

    return (
        <>
            <div className={styles['auction-filter-wrapper']}>
                <div className={styles['auction-actions']}>
                    <select onChange={changeHandler} id="cars" name="type" form="type">
                        <option value="weapon">Weapon</option>
                        <option value="accessory">Accessory</option>
                        <option value="armor">Armor</option>
                    </select>

                </div>
                {/*<div className="GamePage">*/}
                {/*    <button className="open-btn" onClick={() => setModalActive(true)}>open modal window</button>*/}
                {/*</div>*/}
                {/*<AuctionModal active={modalActive} setActive={setModalActive}/>*/}
                {/*<AuctionButton title={'Place lot'}/>*/}

            </div>
        </>
    )
}

export default AuctionFilter