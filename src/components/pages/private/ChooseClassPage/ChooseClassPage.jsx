import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { THUNK_ACTION_setPlayerClass } from '../../../../redux/actions/thunks/thunkSetPlayerClassActions'
import { assassinLink, mageLink, warriorLink } from '../../../../utils/variables'
import BackGround from '../../../common/BackGround/BackGround'
import './ChooseClassPage.scss'

const ChooseClassPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    const [chosenClass, setChosenClass] = useState(0)
    const [inputValue, setInputValue] = useState('')

    const valueHandler = (e) => setInputValue(e.target.value)
    const chooseClassHandler = (classId) => setChosenClass(classId)

    const buttonHandler = (e) => {
        e.preventDefault()
        dispatch(THUNK_ACTION_setPlayerClass({
            user_id: user.user.id,
            class_id: chosenClass ? chosenClass : 1,
            nickname: inputValue,
        }))
        navigate('/')
    }

    return (
        <div className="chooseClassPage">
            <BackGround type={'choose-class'}/>
            <div className="chooseClassPage__title">
                Choose your destiny !
            </div>
            <div className="chooseClassPage__cards">
                <img onClick={() => chooseClassHandler(1)}
                     src={warriorLink}
                     alt="img"
                     className={
                         chosenClass === 1
                             ? 'chooseClassPage__card chooseClassPage__card--selected'
                             : 'chooseClassPage__card'
                     }
                />
                <img onClick={() => chooseClassHandler(2)}
                     src={assassinLink}
                     alt="img"
                     className={
                         chosenClass === 2
                             ? 'chooseClassPage__card chooseClassPage__card--selected'
                             : 'chooseClassPage__card'
                     }
                />
                <img onClick={() => chooseClassHandler(3)}
                     src={mageLink}
                     alt="img"
                     className={
                         chosenClass === 3
                             ? 'chooseClassPage__card chooseClassPage__card--selected'
                             : 'chooseClassPage__card'
                     }
                />
            </div>
            <form onSubmit={buttonHandler} className="chooseClassPage__form">
                <input value={inputValue} onChange={valueHandler} type="text" placeholder="nickName"
                       className="chooseClassPage__input"/>
                <button type="submit" className="chooseClassPage__button">
                    Get Started!
                </button>
            </form>
        </div>)
}

export default ChooseClassPage
