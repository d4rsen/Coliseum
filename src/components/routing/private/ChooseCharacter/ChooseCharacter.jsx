import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {THUNK_ACTION_setPlayerClass} from '../../../../redux/actions/thunks/thunkSetPlayerClassActions'
import './ChooseCharacter.scss'
import PlayerClassFromPlayerClassPage from '../../../common/PlayerClassFromChooseClassPage/PlayerClassFromPlayerClassPage'

const ChooseCharacter = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const player = useSelector(state => state.player)
    const navigation = useNavigate()
    const chooseCharacter = useSelector(state => state.chooseCharacter)
    const [chosenClass, setChosenClass] = useState()
    const [inputValue, setInputValue] = useState('')

    const valueHandler = e => {
        setInputValue(e.target.value)
    }

    const chooseClassHandler = e => {
        e.preventDefault()
        setChosenClass(e.target.id)
        console.log(chosenClass)
        // if (e.target.id === Number(1)) {
        //
        // }

    }

    const buttonHandler = e => {
        e.preventDefault()
        dispatch(THUNK_ACTION_setPlayerClass({
            user_id: user.user.id,
            class_id: Number(chosenClass),
            nickname: inputValue
        }))
        navigation('/')
    }

    return (
        <div className="background">
            <div className="d-flex">
                <PlayerClassFromPlayerClassPage chosenClass={chosenClass}
                                                chooseClassHandler={chooseClassHandler}
                                                id={1}
                                                src={'https://www.pngall.com/wp-content/uploads/4/Japanese-Samurai-Warrior-PNG-Image.png'}/>
                <PlayerClassFromPlayerClassPage chosenClass={chosenClass}
                                                chooseClassHandler={chooseClassHandler}
                                                id={2}
                                                src={'https://pngimg.com/uploads/assassins_creed/assassins_creed_PNG62.png'}/>
                <PlayerClassFromPlayerClassPage chosenClass={chosenClass}
                                                chooseClassHandler={chooseClassHandler}
                                                id={3}
                                                src={'https://www.nicepng.com/png/detail/380-3806743_bleed-area-may-not-be-visible-anime-demon.png'}/>
                <div>
                    <input type="text" onChange={valueHandler} value={inputValue}/>
                    <button onClick={buttonHandler} className="btn btn-outline-success">
                        submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChooseCharacter

