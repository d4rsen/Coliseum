import React from 'react'
import styles from './AttackButton.module.css'

const AttackButton = ({disabled, attackDefendHandler, value}) => {
    return (
        <button className={styles['btn-12']}
                onClick={attackDefendHandler}
                value={value}
                disabled={disabled}>
                  
            <span>Are you sure ?</span>
            <span>{disabled ? 'Wait enemy' : value}</span>
        </button>
    )
}

export default AttackButton

