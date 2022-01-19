import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './ExitRoomModal.css'

function ExitRoomModal({text}) {
    const dispatch = useDispatch()
    const navigation = useNavigate()

    const [active, setActive] = useState(true)

    const propagationHandler = useCallback((e) => {
        e.stopPropagation()
    }, [])
    const quitRoomHandler = e => {
        navigation('/')
    }

    return (
        <div className={active ? 'modal active' : 'modal'}>
            <div className={active ? 'modal__content' : 'modal'}
                 onClick={propagationHandler}>
                <h2>{text}</h2>
                <button onClick={quitRoomHandler}>Выйти из боя</button>
            </div>
        </div>

    )
}

export default ExitRoomModal
