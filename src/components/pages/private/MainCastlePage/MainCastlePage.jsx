import React from 'react'
import BackGround from '../../../common/BackGround/BackGround'
import './MainCastlePage.scss'

const MainCastlePage = () => {
    return (
        <div className="mainCastlePage">
            <BackGround/>
            <div className="mainCastlePage__rules">
                <div className="mainCastlePage__title">
                    Rules
                </div>
                <div className="mainCastlePage__text">
                    <p>The battle technique is progressive attacks with arms and legs.</p>
                    <p>To start the battle, the player just needs to tap (click) on any hostile creature and the character will
                        rush into battle.</p>
                    <p>Depending on each developed characteristic, the impact damage of a particular attack will change.</p>
                    <p>After defeating each of the opponents, your character will receive experience points to increase the level,
                        as well as gold or munition.</p>
                    <p>There is an additional specific in the game.</p>
                    <p>The basic spell is available to you from the first entry into the world of Grimgold.</p>
                    <p>The rest are unlocked based on game progress at levels 4 and 8. </p>
                    <p>Each character class has different skills and has unique mechanics.</p>
                </div>
            </div>
        </div>
    )
}

export default MainCastlePage
