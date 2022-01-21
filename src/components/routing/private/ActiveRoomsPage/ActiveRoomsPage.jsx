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
        <div>
            <h1>ONLINE BATTLES</h1>
            <div>
                <div className="container d-flex flex-row">
                    {activeRooms && activeRooms.map(room => {
                        return (
                            <div key={room.id} className="mx-3">
                                <img onClick={enterRoomHandler} id={room.id}
                                     src="https://t3.ftcdn.net/jpg/02/61/04/02/360_F_261040216_dI5MBh32t9TXeLN1l3mSmNCwILuNcUi5.jpg"
                                     alt="..." height="140"/>
                                <p>{`Watch room №${room.id}`}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ActiveRoomsPage