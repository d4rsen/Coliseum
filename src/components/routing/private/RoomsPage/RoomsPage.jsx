import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ACTION_setRoom } from '../../../../redux/actions/roomActions'
import { THUNK_ACTION_getAllRoomsFromDb } from '../../../../redux/actions/thunks/thunkGetAllRoomsFromDbActions'
import { THUNK_ACTION_getRoomFromDb } from '../../../../redux/actions/thunks/thunkGetRoomFromDbActions'

const RoomsPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(THUNK_ACTION_getAllRoomsFromDb())
    }, [])

    const allRooms = useSelector(state => state.allRooms)
    const navigation = useNavigate()
    // useEffect(() => {
    //     dispatch(THUNK_ACTION_getAllRoomsFromDb())
    // }, [])

    const enterRoomHandler = (e) => {
        e.preventDefault()
        const parsedRoom = JSON.parse(e.target.id)
        dispatch(ACTION_setRoom(parsedRoom))
        navigation('/gym')
    }

    const createRoomHandler = async (e) => {
        e.preventDefault()
        await dispatch(THUNK_ACTION_getRoomFromDb())
        setTimeout(() => {
            navigation('/gym')
        }, 100)
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
                    const stringifiedRoom = JSON.stringify(room)
                    const stringifiedRoomId = JSON.stringify(room.id)

                    return (
                        <div key={stringifiedRoom} className="container d-flex flex-row mt-4">
                            <img onClick={enterRoomHandler} id={stringifiedRoom}
                                 src="https://5mod.ru/uploads/posts/2019-09/1569659198_1569659144.png" alt="..." height="140"/>
                            <p>{stringifiedRoomId}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RoomsPage