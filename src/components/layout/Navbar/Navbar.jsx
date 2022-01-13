import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {THUNK_ACTION_logout} from '../../../redux/actions/thunks/thunkAuthActions'

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

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <div className="navbar navbar-expand-lg navbar-light bg-light d-flex" id="navbarSupportedContent">
                    <a className="navbar-brand mt-2 mt-lg-0" href="#">
                        <NavLink className="me-3 m-1" to="/">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Video-Game-Controller-Icon-IDV-green.svg/2048px-Video-Game-Controller-Icon-IDV-green.svg.png"
                                alt="the game" height="55"/>
                        </NavLink>
                    </a>
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
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/auction">
                                    Auction
                                </NavLink>
                            </li>
                        </>}
                    </ul>
                </div>

                {user &&
                    <div className="d-flex align-items-center">
                        <a
                            className="text-reset me-3 dropdown-toggle hidden-arrow"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="fas fa-bell"/>
                            <span
                                className="badge rounded-pill badge-notification bg-danger"> Your room is {room ? room.id : 'nothing'}
                            </span>
                        </a>

                        {player && player.playerClass === 'warrior' &&
                            <img
                                src="https://t3.ftcdn.net/jpg/03/08/01/98/360_F_308019832_HE6Ks8TsOR2z3mZ3S8Ba6AI2TI2UvxV3.jpg"
                                className="rounded-circle"
                                height="65"
                                alt="Black and White Portrait of a Man"
                                loading="lazy"
                            />}
                        {player && player.playerClass === 'assassin' &&
                            <img
                                src="https://image.shutterstock.com/image-vector/ninja-mascot-logo-illustration-gaming-260nw-1521286004.jpg"
                                className="rounded-circle"
                                height="65"
                                alt="Black and White Portrait of a Man"
                                loading="lazy"
                            />}
                        {player && player.playerClass === 'monk' &&
                            <img
                                src="https://i.pinimg.com/236x/75/9b/66/759b661c994e45977d4405d3dc6bbdf6.jpg"
                                className="rounded-circle"
                                height="65"
                                alt="Black and White Portrait of a Man"
                                loading="lazy"
                            />}
                        {!user && null &&
                            <img
                                src="https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800043/61010830-user-icon-man-profile-businessman-avatar-person-glyph-vector-illustration.jpg?ver=6"
                                className="rounded-circle"
                                height="65"
                                alt="Black and White Portrait of a Man"
                                loading="lazy"
                            />}
                    </div>}
            </div>
        </nav>
    )
}

