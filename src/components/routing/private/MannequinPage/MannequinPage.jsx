import React from 'react'
import AttackButtonMannequinPage from '../../../common/AttackButtonMannequinPage/AttackButtonMannequinPage'
import Mannequin from '../../../common/Mannequin/Mannequin'
import Player from '../../../common/Player/Player'

const MannequinPage = () => {
    return (
        <div className="container mt-3 d-flex flex-row">
            <Player/>
            <AttackButtonMannequinPage/>
            <Mannequin/>
        </div>)
}

export default MannequinPage