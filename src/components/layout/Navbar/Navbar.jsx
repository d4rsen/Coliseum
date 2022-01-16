import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {THUNK_ACTION_logout} from '../../../redux/actions/thunks/thunkAuthActions'
import PlayerProgressBarHpApMp from '../../common/PlayerProgressBarHpApMp/PlayerProgressBarHpApMp'
import style from './Navbar.module.css'

export default function Navbar() {
    const user = useSelector((state) => state.user)
    const player = useSelector((state) => state.player)
    const room = useSelector((state) => state.room)
    const dispatch = useDispatch()
    const logoutHandler = async (e) => {
        e.preventDefault()
        try {
            dispatch(THUNK_ACTION_logout())
        } catch (e) {
            console.log(e)
        }
    }
    const exp = +player?.exp + 40

    return (
        <header className={style.header}>
            <div className={style.wrapper}>
                <div className={style.header__user}>
                    <nav className={style.navigation}>
                        <NavLink className={style.header__logo} to="/">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Video-Game-Controller-Icon-IDV-green.svg/2048px-Video-Game-Controller-Icon-IDV-green.svg.png"
                                alt="Логотип"
                                height="50"
                            />
                        </NavLink>
                        <ul className={style.navigation__list}>
                            {!user && (
                                <>
                                    <li className={style.navigaton__item}>
                                        <NavLink className={style.navigaton__link} to="/register">
                                            Зарегистрироваться
                                        </NavLink>
                                    </li>
                                    <li className={style.navigaton__item}>
                                        <NavLink className={style.navigaton__link} to="/login">
                                            Войти
                                        </NavLink>
                                    </li>
                                </>
                            )}
                            {user && (
                                <>
                                    <li className={style.navigaton__item}>
                                        <NavLink
                                            onClick={logoutHandler}
                                            className={style.navigaton__link}
                                            to="/logout"
                                        >
                                            Выйти
                                        </NavLink>
                                    </li>
                                    <li className={style.navigaton__item}>
                                        <NavLink
                                            onClick={logoutHandler}
                                            className={style.navigaton__link}
                                            to="/logout"
                                        >
                                            Выйти
                                        </NavLink>
                                    </li>
                                    <li className={style.navigaton__item}>
                                        <NavLink
                                            className={style.navigaton__link}
                                            to="/auction"
                                        >
                                            Auction
                                        </NavLink>
                                    </li>
                                    <li className={style.navigaton__item}>
                                        <NavLink className={style.navigaton__link} to="/test">
                                            Тест для Андрея
                                        </NavLink>
                                    </li>
                                </>
                            )}
                        </ul>
                    </nav>


                    {user && (
                        <div className={style.header__progress}>
                            <PlayerProgressBarHpApMp
                                className={style.header__progress_element}
                                bgColor={'red'}

                                stat={player?.hp}
                            />
                            <PlayerProgressBarHpApMp
                                bgColor={'green'}
                                stat={player?.mp}
                            />
                            <PlayerProgressBarHpApMp bgColor={'aqua'} stat={player?.hp}/>
                        </div>
                    )}

                    {user && (
                        <div className={style.header__user}>
                            <div className={style.header__user_params}>
                <span className={style.header__room}>
                   {room ? `Your room is ${room?.id}` : 'You are not in room'}
                </span>
                                <span className={style.header__level}>
                   {player && `Your level is ${player.lvl}`}
                </span>
                            </div>
                            {player && player.playerClass === 'warrior' && (
                                <img
                                    src="https://t3.ftcdn.net/jpg/03/08/01/98/360_F_308019832_HE6Ks8TsOR2z3mZ3S8Ba6AI2TI2UvxV3.jpg"
                                    className={style.header__user_class}
                                    height="50"
                                    alt="Black and White Portrait of a Man"
                                    loading="lazy"
                                />
                            )}
                            {player && player.playerClass === 'assassin' && (
                                <img
                                    src="https://image.shutterstock.com/image-vector/ninja-mascot-logo-illustration-gaming-260nw-1521286004.jpg"
                                    className={style.header__user_class}
                                    height="50"
                                    alt="Black and White Portrait of a Man"
                                    loading="lazy"
                                />
                            )}
                            {player && player.playerClass === 'monk' && (
                                <img
                                    src="https://i.pinimg.com/236x/75/9b/66/759b661c994e45977d4405d3dc6bbdf6.jpg"
                                    className={style.header__user_class}
                                    height="50"
                                    alt="Black and White Portrait of a Man"
                                    loading="lazy"
                                />
                            )}
                            {!user && null && (
                                <img
                                    src="https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800043/61010830-user-icon-man-profile-businessman-avatar-person-glyph-vector-illustration.jpg?ver=6"
                                    className={style.style.header__user_class}
                                    height="50"
                                    alt="Black and White Portrait of a Man"
                                    loading="lazy"
                                />
                            )}
                        </div>
                    )}
                </div>
            </div>
            {player && (
                <div className={style.header__exp}>
                    <PlayerProgressBarHpApMp
                        bgColor={'success'}
                        stat={exp}
                        height={10}
                        fontSize={8}
                    />
                </div>
            )}
        </header>
    )
}
