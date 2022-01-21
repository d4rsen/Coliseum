import React from 'react'
import { useSelector } from 'react-redux'
import style from './Player.module.css'

const Mannequin2 = () => {
    const mannequin = useSelector((state) => state.mannequin)
    const link = 'https://dbforgame.herokuapp.com/static/img/classes/creeps/mob-lynx.jpg'

    return (
        <div className={style.player__enemy}>
            <img
                className={style.player__pic}
                src={link}
            />

            <div className={style.player__right}>
                <div className={style.player__stats}>
                </div>
            </div>
            <div className={style.player__progress}>
                <>
                    <div
                        style={{
                            width: `${20}%`,
                            height: `${mannequin.hp / 100}%`,
                            backgroundColor: 'red',
                        }}
                    >
                        <p style={{fontSize: `${10}px`, transform: `rotateX(${180}deg)`}}>{mannequin.hp}</p>
                    </div>
                </>
            </div>
        </div>
    )
}

export default Mannequin2
