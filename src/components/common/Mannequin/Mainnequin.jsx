import React from 'react'
import { useSelector } from 'react-redux'
import MannequinStats from '../MannequinStats/MannequinStats'

const Mannequin = () => {
    const mannequin = useSelector(state => state.mannequin)
    return (
        <div className="mob">
            <MannequinStats/>
            <div className="mob__hp-mp-ap">
                <div className="mob__progressbar">
                    <div style={{height: 0}} className="mob__mp">
                        {mannequin && mannequin.mp}
                    </div>
                </div>
                <div className="mob__progressbar">
                    <div style={{height: 0}} className="mob__ap">
                        {mannequin && mannequin.ap}
                    </div>
                </div>
                <div className="mob__progressbar">
                    <div style={{height: mannequin ? mannequin.hp / 30 : 0}} className="mob__hp">
                        <div className="mob__text">
                            {mannequin && mannequin.hp}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mob__card">
                <img
                    src="/assets/mannequin/mannequin.png"
                    alt="card"
                    className="mob__img"
                />
            </div>
        </div>
    )
}

export default Mannequin