import React from "react"

const AttackButton = ({disabled, attackDefendHandler, value}) => {
    return (
        <button
            onClick={attackDefendHandler}
            className={`col m-1 btn btn-outline-success ${disabled}`}
            value={value}
        >
            {value}
        </button>
    )
}

export default AttackButton
