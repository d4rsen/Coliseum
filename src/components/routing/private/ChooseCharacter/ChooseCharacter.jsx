import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { THUNK_ACTION_setPlayerClass } from '../../../../redux/actions/thunks/thunkSetPlayerClassActions'
import PlayerClassFromPlayerClassPage from '../../../common/PlayerClassFromChooseClassPage/PlayerClassFromPlayerClassPage'

const ChooseCharacter = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const player = useSelector(state => state.player)
    const navigation = useNavigate()
    const chooseCharacter = useSelector(state => state.chooseCharacter)
    const [chosenClass, setChosenClass] = useState(1)
    const [inputValue, setInputValue] = useState('')

    const valueHandler = e => {
        setInputValue(e.target.value)
    }

    const chooseClassHandler = e => {
        e.preventDefault()
        setChosenClass(e.target.id)
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
        <div className="container d-flex">
            <div className="d-flex">
                <PlayerClassFromPlayerClassPage chooseClassHandler={chooseClassHandler}
                                                id={1}
                                                src={'https://www.pngall.com/wp-content/uploads/4/Japanese-Samurai-Warrior-PNG-Image.png'}/>
                <PlayerClassFromPlayerClassPage chooseClassHandler={chooseClassHandler}
                                                id={2}
                                                src={'https://pngimg.com/uploads/assassins_creed/assassins_creed_PNG62.png'}/>
                <PlayerClassFromPlayerClassPage chooseClassHandler={chooseClassHandler}
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

