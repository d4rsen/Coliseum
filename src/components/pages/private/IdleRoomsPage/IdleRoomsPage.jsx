import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ACTION_PlayerRegenerate } from '../../../../redux/actions/playerActions'
import { THUNK_ACTION_enterRoom } from '../../../../redux/actions/thunks/thunkEnterRoomActions'
import { THUNK_ACTION_getIdleRoomsFromDb } from '../../../../redux/actions/thunks/thunkGetAllRoomsFromDbActions'
import { THUNK_ACTION_getRoomFromDb } from '../../../../redux/actions/thunks/thunkGetRoomFromDbActions'
import BackGround from '../../../common/BackGround/BackGround'
import './IdleRoomsPage.scss'

const IdleRoomsPage = () => {
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const player = useSelector(state => state.player)
    const idleRooms = useSelector(state => state.idleRooms)

    useEffect(() => {
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

    const enterRoomHandler = async (roomId) => {
        await dispatch(THUNK_ACTION_enterRoom(roomId))
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
        <div className="idleRoomsPage">
            <BackGround/>
            <div className="idleRoomsPage__top">
                <div className="idleRoomsPage__title">
                    ENEMIES ARE WAITING FOR YOU !
                </div>
                <button onClick={createRoomHandler} className="idleRoomsPage__button">
                    create room
                </button>
            </div>
            <div className="idleRoomsPage__bottom">
                <div className="idleRoomsPage__rooms">
                    {idleRooms
                        ? idleRooms.map(room =>
                            <div key={room.id} className="idleRoomsPage__room">
                                <img src="favicon.ico" alt="" className="idleRoomsPage__room-img"/>
                                <button
                                    onClick={() => enterRoomHandler(room.id)}
                                    className="idleRoomsPage__button-join"
                                >
                                    Join room {room.id}
                                </button>
                            </div>
                        )
                        :
                        (
                            <div className="idleRoomsPage__nothing">
                                Nobody created a room ...
                            </div>
                        )}
                </div>
            </div>
        </div>
    )
}

export default IdleRoomsPage
