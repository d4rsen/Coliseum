import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { THUNK_ACTION_logout } from '../../../redux/actions/thunk/thunkAuthActions'

export default function Navbar() {
    const user = useSelector((state) => state.user)
    const player = useSelector(state => state.player)
    const room = useSelector(state => state.room)
    const dispatch = useDispatch()
    const logoutHandler = async (e) => {
        e.preventDefault()
        try {
            dispatch(THUNK_ACTION_logout())
        } catch (e) {
            console.log(e)
        }
    }

    return (<nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
        <div className="container">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <NavLink className="me-3 m-1" to="/">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Video-Game-Controller-Icon-IDV-green.svg/2048px-Video-Game-Controller-Icon-IDV-green.svg.png"
                        alt="..." height="55"/>
                </NavLink>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {!user && (<>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/register">
                                Зарегистрироваться
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">
                                Войти
                            </NavLink>
                        </li>
                    </>)}
                    {user && <>
                        <li className="nav-item">
                            <NavLink onClick={logoutHandler} className="nav-link" to="/logout">
                                Выйти
                            </NavLink>
                        </li>
                    </>}
                </ul>
                <div>
                    {player && player.nickName}
                    {room && room.id}
                </div>
            </div>
        </div>
    </nav>)
}

