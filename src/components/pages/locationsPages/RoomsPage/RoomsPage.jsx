import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ACTION_setRoom } from '../../../../redux/actions/roomActions'
import { THUNK_ACTION_getRoomFromDb } from '../../../../redux/actions/thunk/thunkGetRoomFromDbActions'

const RoomsPage = () => {
    const dispatch = useDispatch()
    const allRooms = useSelector(state => state.allRooms)
    const navigation = useNavigate()

    const enterRoomHandler = (e) => {
        e.preventDefault()
        const parsedRoom = JSON.parse(e.target.id)
        console.log(parsedRoom)
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
                {allRooms.map(room => {
                    const stringifiedRoom = JSON.stringify(room)
                    return (
                        <div key={stringifiedRoom} className="container d-flex flex-row mt-4">
                            <img onClick={enterRoomHandler} id={stringifiedRoom}
                                 src="https://cdn-icons-png.flaticon.com/512/1732/1732452.png" alt="..." height="140"/>
                            <p>{stringifiedRoom}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RoomsPage