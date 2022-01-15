import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { THUNK_ACTION_enterRoom } from '../../../../redux/actions/thunks/thunkEnterRoomActions'
import { THUNK_ACTION_getRoomFromDb } from '../../../../redux/actions/thunks/thunkGetRoomFromDbActions'

const RoomsPage = () => {
    const dispatch = useDispatch()
    const allRooms = useSelector(state => state.allRooms)
    const navigation = useNavigate()
    const player = useSelector(state => state.player)

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
            <div>
                <button onClick={createRoomHandler} className="btn btn-primary">
                    Создать комнату
                </button>
            </div>
            <div>
                {allRooms && allRooms.map(room => {
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

export default RoomsPage