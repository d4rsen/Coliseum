import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ACTION_PlayerRegenerate } from '../../../../redux/actions/playerActions'
import Map from '../../../common/Map/Map'

const MainPage = () => {
    const dispatch = useDispatch()
    const player = useSelector((state) => state.player)
    const navigation = useNavigate()
    const user = useSelector(state => state.user)

    // useEffect(() => {
    //     dispatch(THUNK_ACTION_getPlayerFromDb())
    // }, [])

    useEffect(() => {
        setTimeout(() => {
            dispatch(ACTION_PlayerRegenerate())
        }, 3000)
    }, [player, dispatch])
    const roomsHandler = (e) => {
        e.preventDefault()
        navigation('/rooms')
    }

    return (

        <div>
            <Map width={'width'} height={'height'} type={'logIn'}/>
        </div>
        // <div className="container row justify-content-center, align-items-center m-auto my-3">
        //     {castles.map((castle) => (
        //         <div
        //             onClick={() => navigation(castle.link)}
        //             key={castle.id}
        //             className="col m-0 p-0"
        //         >
        //             <img src={castle.img} alt="..." height="140"/>
        //             <p>{castle.name}</p>
        //         </div>
        //     ))}
        //     <div onClick={roomsHandler}>
        //         <img src="https://www.pngarts.com/files/5/Colosseum-Rome-PNG-Transparent-Image.png"
        //              alt="..." height="160"/>
        //         <p>Колизей </p>
        //     </div>
        // </div>
    )
}

export default MainPage
