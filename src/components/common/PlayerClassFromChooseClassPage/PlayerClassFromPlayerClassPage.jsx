import React from 'react'

const PlayerClassFromPlayerClassPage = ({id, chooseClassHandler, src, chosenClass}) => {

    return (
        <div className={`chosen ${chosenClass == id && 'active-card'}`}>
            <img
                onClick={chooseClassHandler} id={id} 
                src={src}
                alt="..."/>
        </div>
    )
}

export default PlayerClassFromPlayerClassPage
