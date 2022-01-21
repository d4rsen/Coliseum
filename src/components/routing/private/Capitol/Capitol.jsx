import React from 'react'

const Capitol = () => {
    return (
        <div className="container">
            <div style={{
                margin: 'auto',
                boxShadow: '0 0 10px 5px black',
                opacity: '0.9',
                padding: '2em',
                borderRadius: '15px',
                background: 'wheat',
            }}>
                <h1>Rules:</h1>
                <article style={{
                    fontSize: '2em', paddingBottom: '2em'
                }}>
                    The battle technique is progressive attacks with arms and legs. To start the battle, the player just needs to
                    tap (click) on any hostile
                    creature and the character will rush into battle.<br/> Depending on each developed characteristic, the impact
                    damage of a particular attack
                    will
                    change. After defeating each of the opponents, your character will receive experience points to increase the
                    level, as well as gold or
                    munition.
                    There is an additional specific in the game.<br/> The basic spell is available to you from the first entry
                    into the world of Grimgold. The
                    rest
                    are
                    unlocked based on game progress at levels 4 and 8. Each character class has different skills and has unique
                    mechanics.
                </article>
            </div>
        </div>
    )
}

export default Capitol