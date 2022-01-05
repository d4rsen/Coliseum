import React from 'react'

const PlayerProgressBarHpApMp = ({bgColor, stat}) => {
    return (
        <div>
            <div className="progress">
                <div
                    className={`progress-bar progress-bar-striped progress-bar-animated ${bgColor}`}
                    role="progressbar"
                    style={{width: `${stat}%`}}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                >
                    {stat}
                </div>
            </div>
        </div>
    )
}

export default PlayerProgressBarHpApMp