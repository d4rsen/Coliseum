import React from 'react'
import { useNavigate } from 'react-router-dom'
import BackGround from '../../../common/BackGround/BackGround'
import './HomePage.scss'

const HomePage = () => {
    const navigate = useNavigate()
    const registrationHandler = e => navigate('/registration')
    const authorizationHandler = e => navigate('/authorization')

    return (
        <div className="homePage">
            <BackGround type={'home'}/>
            <div className="homePage__title">
                Coliseum
            </div>
            <div className="homePage__buttons">
                <button onClick={registrationHandler} className="homePage__registration">
                    Sign Up
                </button>
                <button onClick={authorizationHandler} className="homePage__authorization">
                    Log In
                </button>
            </div>
        </div>
    )
}

export default HomePage
