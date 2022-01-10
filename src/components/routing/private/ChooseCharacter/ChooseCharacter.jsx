import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { THUNK_ACTION_getPlayerFromDb } from '../../../../redux/actions/thunks/thunkPlayersFromDbActions'
import { THUNK_ACTION_setPlayerClass } from '../../../../redux/actions/thunks/thunkSetPlayerClassActions'

const ChooseCharacter = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const [chosenClass, setChosenClass] = useState(1)
    const [inputValue, setInputValue] = useState('')
    const chooseCharacter = useSelector(state => state.chooseCharacter)

    useEffect(() => {
        chooseCharacter && dispatch(THUNK_ACTION_getPlayerFromDb(user.user.id))
    }, [])

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
    }

    return (
        <div className="container vertical-scrollable">
            <div className="column flex-column flex-nowrap">
                <div>
                    <img
                        onClick={chooseClassHandler} id={1} height="140"
                        src="https://www.pngall.com/wp-content/uploads/4/Japanese-Samurai-Warrior-PNG-Image.png"
                        alt="воин"/>
                </div>
                <div>
                    <img
                        onClick={chooseClassHandler} id={2}
                        height="140" src="https://pngimg.com/uploads/assassins_creed/assassins_creed_PNG62.png" alt="ассансин"/>
                </div>
                <div>
                    <img
                        onClick={chooseClassHandler} id={3}
                        height="140"
                        src="https://www.nicepng.com/png/detail/380-3806743_bleed-area-may-not-be-visible-anime-demon.png"
                        alt="маг"
                    />
                </div>
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

