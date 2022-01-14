import React from 'react'
import EnemyPlayer from '../../../common/EnemyPlayer/EnemyPlayer'
import Player from '../../../common/Player/Player'
import './button.css'

const GymPage = () => {
    // const dispatch = useDispatch()
    // const [socket, setSocket] = useState(new WebSocket('wss://herokuws.herokuapp.com/'))
    // // const [socket, setSocket] = useState(new WebSocket('ws://localhost:8000/'))
    // const player = useSelector((state) => state.player)
    // const enemyPlayer = useSelector(state => state.enemyPlayer)
    // const battlePlayer = useSelector(state => state.battlePlayer)
    // const battleEnemyPlayer = useSelector(state => state.battleEnemyPlayer)
    // const room = useSelector(state => state.room)

    // WEBSOCKET
    // useEffect(() => {
    //     socket.onopen = () => {
    //         socket.send(JSON.stringify({
    //             id: room.id,
    //             method: 'connection',
    //             player,
    //             battlePlayer,
    //         }))
    //     }
    // }, [])
    // useEffect(() => {
    //     socket.onmessage = (e) => {
    //         const WSenemy = JSON.parse(e.data)
    //         console.log(WSenemy)
    //         if (WSenemy.player.nickName !== player.nickName) {
    //             dispatch(ACTION_getEnemyPlayer(WSenemy.player))
    //             dispatch(ACTION_getEnemyStateFromWS(WSenemy.battlePlayer))
    //             dispatch(ACTION_punchFromEnemyPlayerToPlayer(WSenemy.player.total_stats.dmg, battlePlayer, battleEnemyPlayer))
    //             dispatch(ACTION_punchFromPlayerToEnemyPlayer(WSenemy.player.total_stats.dmg, battlePlayer, battleEnemyPlayer))
    //         }
    //     }
    // }, [])

    return (
        <div className="container mt-3 d-flex flex-row">
            <Player/>
            {/*<AttackDefendWithCyberButtons socket={socket}/>*/}
            <EnemyPlayer/>
        </div>
    )
}

export default GymPage