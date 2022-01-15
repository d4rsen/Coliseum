import React from 'react'
import style from  './EmptyItem'


const EmptyItem = ({pic, name, width, height}) => {
    const emptySwordLink = 'https://www.pngall.com/wp-content/uploads/2016/03/Sword-PNG-File.png'

    return (
        <div className={style.playerItem}>
            <img style={{width: `${width}%`, height: `${height}%`}} src={emptySwordLink}
                 className=""
                 alt={`Элемент экипировки ${name}`} />
            <p style={{width: '50px'}}>{name}</p>
        </div>
    )
}

export default EmptyItem
