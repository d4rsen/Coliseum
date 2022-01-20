import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ACTION_PlayerRegenerate } from '../../../../redux/actions/playerActions'
import { THUNK_ACTION_getActiveRoomsFromDb } from '../../../../redux/actions/thunks/thunkGetAllRoomsFromDbActions'
import { SET_ROOM } from '../../../../redux/types/roomTypes'

const ActiveRoomsPage = ({socket}) => {
    const dispatch = useDispatch()
    const activeRooms = useSelector(state => state.activeRooms)
    const navigation = useNavigate()
    const player = useSelector(state => state.player)
    const watchBatlle = useSelector(state => state.watchBatlle)

    useEffect(() => {
        dispatch(THUNK_ACTION_getActiveRoomsFromDb())
        console.log(activeRooms)
        return () => {
            dispatch(THUNK_ACTION_getActiveRoomsFromDb())
        }
    }, [dispatch])

    useEffect(() => {
        setTimeout(() => {
            dispatch(ACTION_PlayerRegenerate())
        }, 3000)
    }, [player, dispatch])

    const enterRoomHandler = async (e) => {
        e.preventDefault()
        dispatch({type: SET_ROOM, payload: Number(e.target.id)})
        setTimeout(() => {
            navigation('/watch-battle')
        }, 200)
    }

    return (
        <div className="container mt-5 d-flex flex-column">
            <div>
                {activeRooms && activeRooms.map(room => {
                    return (
                        <div key={room.id} className="container d-flex flex-row mt-4">
                            <img onClick={enterRoomHandler} id={room.id}
                                 src="https://5mod.ru/uploads/posts/2019-09/1569659198_1569659144.png" alt="..." height="140"/>
                            <p>{`${room.id}`}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ActiveRoomsPage