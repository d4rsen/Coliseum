import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { THUNK_login } from '../../../../redux/thunks/thunkAuthActions'
import BackGround from '../../../common/BackGround/BackGround'
import './AuthorizationPage.scss'

const AuthorizationPage = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const emailHandler = (e) => setEmail(e.target.value)
    const passwordHandler = (e) => setPassword(e.target.value)

    const submitHandler = async (e) => {
        e.preventDefault()
        await dispatch(THUNK_login({email, password}))
        navigate('/')
    }
    return (
        <div className="authorizationPage">
            <BackGround type={'auth'}/>
            <form onSubmit={submitHandler} className="authorizationPage__form">
                <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={emailHandler}
                    className="authorizationPage__email"
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={passwordHandler}
                    className="authorizationPage__password"
                />
                <button type="submit" className="authorizationPage__button">
                    Sign Up
                </button>
            </form>
        </div>
    )
}

export default AuthorizationPage
