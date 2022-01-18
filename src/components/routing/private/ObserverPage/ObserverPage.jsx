import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ACTION_PlayerRegenerate } from '../../../../redux/actions/playerActions'

const ObserverPage = () => {
    const dispatch = useDispatch()
    const player = useSelector(state => state.player)
    useEffect(() => {
        setTimeout(() => {
            dispatch(ACTION_PlayerRegenerate())
        }, 3000)
    }, [player, dispatch])
    return (
        <div>
            ObserverPage
        </div>
    )
}

export default ObserverPage