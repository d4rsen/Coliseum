import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ACTION_PlayerRegenerate } from '../../../../redux/actions/playerActions'
import Map from '../../../common/Map/Map'
import Player from '../../../common/Player/Player'
import style from './mainPage.module.css'

const MainPage = () => {
    const dispatch = useDispatch()
    const player = useSelector((state) => state.player)
    const navigation = useNavigate()

    const castles = [
        {
            link: '/train',
            name: 'Казарма новичков',
            img: 'https://wiki.plarium.com/images/b/b8/SF_Barracks.png',
            id: 1,
        },
        {
            link: '/observer',
            name: 'Башня наблюдения ',
            img: 'https://www.pngall.com/wp-content/uploads/5/Tower-PNG-Clipart.png',
            id: 2,
        },
        {
            link: '/main-tower',
            name: 'Главный замок',
            img: 'https://www.pngall.com/wp-content/uploads/2016/06/Castle-PNG.png',
            id: 3,
        },
        {
            link: '/mannequin',
            name: 'Тренировочный зал',
            img: 'https://i.pinimg.com/originals/6a/05/29/6a0529a3b11180942ab7150b9ccbc13c.png',
            id: 4,
        },
        {
            link: '/inventory',
            name: 'Мой замок',
            img: 'https://www.pngkey.com/png/full/129-1294071_the-main-keep-hikone-castle.png',
            id: 5,
        },
    ]

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
        <div className={style.main__gym}>

            <Player type={'home'}/>

            <div className={style.main__map}>
                <Map width={'width'} height={'height'} type={'logIn'}/>
            </div>
        </div>

        /* <div className={style.main__gym}>
        <Player/>
        <AttackDefendWithCyberButtons socket={socket}/>
        <Player type={'enemy'}/>
        </div> */
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
