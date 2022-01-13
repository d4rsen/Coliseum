import React from 'react'

const Item = ({item}) => {
    const link = 'https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/6b/f3/a6/6bf3a6b2-85de-5e23-cb92-0d739a178c53/source/512x512bb.jpg'

    return (
        <div className="col-2 m-0 p-0" key={item.item_name}>
            <img style={{width: '80px', height: '80px'}} src={link} className="m-1 border border-primary"
                 alt="..."/>
            <p style={{width: '50px'}}>{item.item_name}</p>
        </div>
    )
}

export default Item