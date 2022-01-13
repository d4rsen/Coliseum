import React from 'react'

const EmptyItem = () => {
    const emptySwordLink = 'https://www.pngall.com/wp-content/uploads/2016/03/Sword-PNG-File.png'

    return (
        <div className="col-2 m-0 p-0">
            <img style={{width: '80px', height: '80px'}} src={emptySwordLink}
                 className="m-1 border border-primary"
                 alt="..."/>
            <p style={{width: '50px'}}>пусто</p>
        </div>
    )
}

export default EmptyItem