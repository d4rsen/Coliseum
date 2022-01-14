import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <div id="oopss">
                <div id="error-text">
                    <img src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404"/>
                    <span>404 PAGE</span>
                    <p className="p-a">
                        . Такой страницы не существует</p>
                    <p className="p-b">
                        ... Вернитесь на главную страницу
                    </p>
                    <Link to="/" className="back">... Вернуться на главную</Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound