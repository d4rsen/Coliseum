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
                 style={{
                     background: 'wheat',
                     display: 'flex',
                     flexDirection: 'column',
                     justifyContent: 'center',
                     alignItems: 'center'
                 }}
                 onClick={propagationHandler}>
                <h2
                    style={{}}
                >{text}</h2>
                <button
                    className="button"
                    onClick={quitRoomHandler}
                    style={{
                        height: '20%',
                        padding: '1em',
                    }}>Exit battle
                </button>
            </div>
        </div>

    )
}

export default ExitRoomModal
