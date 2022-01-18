import React from 'react'
import { useSelector } from 'react-redux'
import PlayerProgressBarHpApMp from '../PlayerProgressBarHpApMp/PlayerProgressBarHpApMp'

const Mannequin = () => {
    const link = 'https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/6b/f3/a6/6bf3a6b2-85de-5e23-cb92-0d739a178c53/source/512x512bb.jpg'
    const mannequin = useSelector(state => state.mannequin)
    return (
        <div className="container">
            <div className="justify-content-center align-items-center">
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img style={{width: '80px', height: '80px'}} src={link} className="m-1 border border-danger"/>
                    <img style={{width: '80px', height: '80px'}} src={link} className="m-1 border border-danger"/>
                    <img style={{width: '80px', height: '80px'}} src={link} className="m-1 border border-danger"/>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <img style={{width: '255px', height: '255px'}} className="m-1 border border-danger border-2"
                         src="https://i.pinimg.com/originals/6a/05/29/6a0529a3b11180942ab7150b9ccbc13c.png"/>
                    <img style={{width: '110px', height: '110px'}}
                         src="https://atlas.wiki.fextralife.com/file/Atlas/bow_weapons_ranged_atlas_mmo_wiki_guide.png"
                         className="m-1 border border-danger"/>
                </div>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img style={{width: '80px', height: '80px'}} src={link} className="m-1 border border-danger"/>
                    <img style={{width: '80px', height: '80px'}} src={link} className="m-1 border border-danger"/>
                    <img style={{width: '80px', height: '80px'}} src={link} className="m-1 border border-danger"/>
                </div>
            </div>


            {/*progressbar*/}

            <PlayerProgressBarHpApMp stat={mannequin ? mannequin.hp : null} bgColor="bg-danger"/>


            <div className="mb-5">
                <ul className="list-group">
                    <li className="list-group-item">{mannequin ? mannequin.nickName : null}</li>
                </ul>
            </div>
        </div>
    )
}

export default Mannequin