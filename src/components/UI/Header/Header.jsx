import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { THUNK_logout } from '../../../redux/thunks/thunkAuthActions'
import Bag from '../../common/Bag/Bag'
import './Header.scss'

const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const player = useSelector((state) => state.player)
    const room = useSelector((state) => state.room)

    const logoHandler = () => navigate('/')
    const logoutHandler = () => dispatch(THUNK_logout())
    const bagHandler = () => navigate('/inventory')

    return (
        <header className="header">
            <div className="header__left">
                <div onClick={logoHandler} className="header__logo">
                    <img src="https://dbforgame.herokuapp.com/static/img/logo.png"
                         alt="logo"
                         className="header__logo-img"
                    />
                </div>
                <button onClick={logoutHandler} className="header__logout">
                    Log Out
                </button>
            </div>
            <div className="header__mid">
                <div className="header__hp-mp-ap">
                    <div className="header__progressbar">
                        <div style={{width: player.hp * 3}} className="header__hp">
                            {player.hp}
                        </div>
                    </div>
                    <div className="header__progressbar">
                        <div style={{width: player.ap * 3}} className="header__ap">
                            {player.ap}
                        </div>
                    </div>
                    <div className="header__progressbar">
                        <div style={{width: player.mp * 3}} className="header__mp">
                            {player.mp}
                        </div>
                    </div>
                </div>
            </div>
            <div className="header__right">
                <div className="header__stats">
                    <div className="header__nickname">
                        {player && player.nickName}
                    </div>
                    <div className="header__lvl">
                        Level {player.lvl}
                    </div>
                </div>
                <div className="header__stats">
                    <div className="header__room">
                        {room ? `Your room is ${room.id}` : 'Not in room'}
                    </div>
                    <div className="header__gold">
                        You have {player && player.balance} ₲
                    </div>
                </div>
                <div onClick={bagHandler} className="header__bag">
                    <Bag/>
                </div>
            </div>
        </header>
    )
}

export default Header
