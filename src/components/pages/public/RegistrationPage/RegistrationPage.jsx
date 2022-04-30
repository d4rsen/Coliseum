import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { THUNK_register } from '../../../../redux/thunks/thunkAuthActions'
import BackGround from '../../../common/BackGround/BackGround'
import './RegistrationPage.scss'

const RegistrationPage = () => {
    const dispatch = useDispatch()
    const [login, setLogin] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const nameHandler = (e) => setLogin(e.target.value)
    const emailHandler = (e) => setEmail(e.target.value)
    const passwordHandler = (e) => setPassword(e.target.value)
    const submitHandler = async (e) => {
        e.preventDefault()
        await dispatch(THUNK_register({login, email, password}))
        navigate('/choose-class')
    }

    return (
        <div className="registrationPage">
            <BackGround type={'auth'}/>
            <form onSubmit={submitHandler} className="registrationPage__form">
                <input
                    type="text"
                    placeholder="name"
                    value={login}
                    onChange={nameHandler}
                    className="registrationPage__name"
                />
                <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={emailHandler}
                    className="registrationPage__email"
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={passwordHandler}
                    className="registrationPage__password"
                />
                <button type="submit" className="registrationPage__button">
                    Sign Up
                </button>
            </form>
        </div>
    )
}

export default RegistrationPage
