import React from 'react'

const PlayerClassFromPlayerClassPage = ({id, chooseClassHandler, src}) => {
    return (
        <div>
            <img
                onClick={chooseClassHandler} id={id} 
                src={src}
                alt="..."/>
        </div>
    )
}

export default PlayerClassFromPlayerClassPage
