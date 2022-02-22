import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ACTION_PlayerRegenerate } from '../../../../redux/actions/playerActions'
import { THUNK_ACTION_getActiveRoomsFromDb } from '../../../../redux/actions/thunks/thunkGetAllRoomsFromDbActions'
import { SET_ROOM } from '../../../../redux/types/roomTypes'
import BackGround from '../../../common/BackGround/BackGround'
import './ActiveRoomsPage.scss'

const ActiveRoomsPage = () => {

    const dispatch = useDispatch()
    const activeRooms = useSelector(state => state.activeRooms)
    const navigate = useNavigate()
    const player = useSelector(state => state.player)
    const watchBattle = useSelector(state => state.watchBattle)

    useEffect(() => {
        dispatch(THUNK_ACTION_getActiveRoomsFromDb())
        return () => {
            dispatch(THUNK_ACTION_getActiveRoomsFromDb())
        }
    }, [dispatch])

    useEffect(() => {
        setTimeout(() => {
            dispatch(ACTION_PlayerRegenerate())
        }, 3000)
    }, [player, dispatch])

    const enterRoomHandler = (room) => {
        dispatch({type: SET_ROOM, payload: room})
        setTimeout(() => {
            navigate('/watch-battle')
        }, 200)
    }
    return (
        <div className="activeRoomsPage">
            <BackGround/>
            <div className="activeRoomsPage__top">
                <div className="activeRoomsPage__title">
                    Watch battles online
                </div>
            </div>
            <div className="activeRoomsPage__bottom">
                <div className="activeRoomsPage__rooms">
                    {activeRooms
                        ? activeRooms.map(room =>
                            <div key={room.id} className="activeRoomsPage__room">
                                <img src="favicon.ico" alt="" className="activeRoomsPage__room-img"/>
                                <button
                                    onClick={() => enterRoomHandler(room)}
                                    className="activeRoomsPage__button-join"
                                >
                                    Watch battle room {room.id}
                                </button>
                            </div>
                        )
                        :
                        (
                            <div className="activeRoomsPage__nothing">
                                Nobody is fighting ...
                            </div>
                        )}
                </div>
            </div>
        </div>
    )
}

export default ActiveRoomsPage
