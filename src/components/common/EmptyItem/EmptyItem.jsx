import React from 'react'
import style from './EmptyItem.module.css'

const EmptyItem = ({img, name, width, height}) => {
    return (
        (<div className={style.playerItem}>

                <img style={{width: `${width}%`, height: `${height}%`}} src={img}
                     className=""
                     alt={`Элемент экипировки ${name}`}/>
                {/* <p style={{width: '50px'}}>{name}</p> */}
            </div>
        )

    )
}

export default EmptyItem

