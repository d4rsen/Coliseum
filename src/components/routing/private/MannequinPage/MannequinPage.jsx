import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ACTION_PlayerRegenerate } from '../../../../redux/actions/playerActions'
import AttackButtonMannequinPage from '../../../common/AttackButtonMannequinPage/AttackButtonMannequinPage'
import Mannequin from '../../../common/Mannequin/Mannequin'
import Player from '../../../common/Player/Player'

const MannequinPage = () => {
    const dispatch = useDispatch()
    const player = useSelector(state => state.player)

    useEffect(() => {
        setTimeout(() => {
            dispatch(ACTION_PlayerRegenerate())
        }, 3000)
    }, [player, dispatch])
    return (
        <div className="container mt-3 d-flex flex-row">
            <Player/>
            <AttackButtonMannequinPage/>
            <Mannequin/>
        </div>)
}

export default MannequinPage