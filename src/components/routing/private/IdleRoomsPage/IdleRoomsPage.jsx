import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ACTION_PlayerRegenerate } from '../../../../redux/actions/playerActions'
import { THUNK_ACTION_enterRoom } from '../../../../redux/actions/thunks/thunkEnterRoomActions'
import { THUNK_ACTION_getIdleRoomsFromDb } from '../../../../redux/actions/thunks/thunkGetAllRoomsFromDbActions'
import { THUNK_ACTION_getRoomFromDb } from '../../../../redux/actions/thunks/thunkGetRoomFromDbActions'

const IdleRoomsPage = () => {
    const dispatch = useDispatch()
    const idleRooms = useSelector(state => state.idleRooms)
    const navigation = useNavigate()
    const player = useSelector(state => state.player)

    useEffect(() => {
        // (!idleRooms) && dispatch(THUNK_ACTION_getIdleRoomsFromDb())
        dispatch(THUNK_ACTION_getIdleRoomsFromDb())
        return () => {
            dispatch(THUNK_ACTION_getIdleRoomsFromDb())
        }
    }, [dispatch])

    useEffect(() => {
        setTimeout(() => {
            dispatch(ACTION_PlayerRegenerate())
        }, 3000)
    }, [player, dispatch])

    const enterRoomHandler = async (e) => {
        e.preventDefault()
        await dispatch(THUNK_ACTION_enterRoom(e.target.id))
        setTimeout(() => {
            navigation('/coliseum')
        }, 200)
    }

    const createRoomHandler = async (e) => {
        e.preventDefault()
        await dispatch(THUNK_ACTION_getRoomFromDb(player.id))
        setTimeout(() => {
            navigation('/coliseum')
        }, 200)
    }

    return (
        <div className="container mt-5 d-flex flex-column">
            <h1>PAYERS ARE WAITING FOR THE OPPONENT </h1>
            <div>
                <button onClick={createRoomHandler} className="btn btn-primary">
                    Create room
                </button>
            </div>
            <div className="container d-flex flex-row mt-4">
                {idleRooms && idleRooms.map(room => {
                    return (
                        <div className="mx-3" key={room.id}>
                            <img onClick={enterRoomHandler} id={room.id}
                                 src="https://cdn0.iconfinder.com/data/icons/miltary-service/50/13-512.png" alt="..."
                                 height="140"/>
                            <p>{`Join room №${room.id}`}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default IdleRoomsPage