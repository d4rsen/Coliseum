import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { io } from 'socket.io-client'
import Footer from '../components/UI/Footer/Footer'
import Header from '../components/UI/Header/Header'
import { THUNK_ACTION_checkAuth } from '../redux/actions/thunks/thunkAuthActions'
import Router from '../router/Router'
import './App.scss'

// const socket = io.connect('https://dbforgame.herokuapp.com/', {
//     withCredentials: true
// })
const socket = io.connect('https://dbforgame.herokuapp.com/')

function App() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const isAuth = useSelector(state => state.isAuth)
    const isLoading = useSelector((state) => state.isLoading)
    const player = useSelector(state => state.player)

    useEffect(() => {
        (localStorage.getItem('token') !== false) && dispatch(THUNK_ACTION_checkAuth())
        player && socket.emit('player-connected', player.nickName)
        return () => {
            player && socket.emit('player-disconnected', player.nickName)
            player && socket.off()
        }

    }, [dispatch])

    const [active, setActive] = useState(true)

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
