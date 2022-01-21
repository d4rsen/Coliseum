import {useDispatch, useSelector} from 'react-redux'
import {ACTION_punchFromPlayerToMob} from '../../../../redux/actions/mobsActions'
import {ACTION_punchFromMobToPlayer} from '../../../../redux/actions/playerActions'
import ExitRoomModal from '../../ExitRoomModal/ExitRoomModal'
import style from './AttackDefendWithCyberButtons.module.css'

const MobButtons = () => {
    const dispatch = useDispatch()

    const player = useSelector((state) => state.player)
    const mob = useSelector(state => state.mob)

    const battleHandler = (e) => {
        e.preventDefault()
        dispatch(ACTION_punchFromPlayerToMob(player.total_stats.dmg))
        dispatch(ACTION_punchFromMobToPlayer(mob.creepStats.dmg))
    }

    return (<div className={style.buttons__block}>
        <button
            onClick={battleHandler}
            className="cybr-btn m-2">
            {'Бой'}
            <span aria-hidden>_</span>
            <span aria-hidden
                  className="cybr-btn__glitch">{'Бой_'}</span>
            <span aria-hidden className="cybr-btn__tag">Coliseum</span>
        </button>
        <div>
            {player && player.hp <= 0 && (
                <ExitRoomModal text={`DEFEAT`}/>
            )}
            {mob && mob.creepStats.hp <= 0 && (
                <ExitRoomModal text={`WIN`}/>
            )}
        </div>
    </div>)
}

export default MobButtons


