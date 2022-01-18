import React from 'react'
import styles from './AttackButton.module.css'

const AttackButton = ({disabled, attackDefendHandler, value}) => {
    return (
        <button className={styles['custom-btn btn-12"']}
                onClick={attackDefendHandler}
                value={value}
                disabled={disabled}>
            <span>Are you sure ?</span>
            <span>{disabled ? value : 'Wait for an enemy'}</span>
        </button>
    )
}

export default AttackButton

