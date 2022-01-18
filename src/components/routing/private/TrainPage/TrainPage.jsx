import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ACTION_PlayerRegenerate } from '../../../../redux/actions/playerActions'

const TrainPage = () => {
    const dispatch = useDispatch()
    const player = useSelector(state => state.player)

    useEffect(() => {
        setTimeout(() => {
            dispatch(ACTION_PlayerRegenerate())
        }, 3000)
    }, [player, dispatch])

    return <div>TrainPage</div>
}

export default TrainPage
