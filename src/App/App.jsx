import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { io } from 'socket.io-client'
import Footer from '../components/UI/Footer/Footer'
import Header from '../components/UI/Header/Header'
import { THUNK_checkAuth } from '../redux/thunks/thunkAuthActions'
import Router from '../router/Router'
import './App.scss'

const socket = io.connect('https://dbforgame.herokuapp.com/')

function App() {
    const dispatch = useDispatch()
    const player = useSelector(state => state.player)

    useEffect(() => {
        (localStorage.getItem('token') !== false) && dispatch(THUNK_checkAuth())
        player && socket.emit('player-connected', player.nickName)
        return () => {
            player && socket.emit('player-disconnected', player.nickName)
            player && socket.off()
        }
    }, [dispatch])

    return (
        <div className="wrapper">
            {player && <Header/>}
            <main className="main _container">
                <Router socket={socket}/>
            </main>
            {player && <Footer socket={socket}/>}
        </div>
    )
}

export default App
