import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Navigate, Route, Routes} from 'react-router-dom'
import {io} from 'socket.io-client'


import Footer from '../components/layout/Footer/Footer'
import Loader from '../components/layout/Loader/Loader'
import Navbar from '../components/layout/Navbar/Navbar'
import ActiveRoomsPage from '../components/routing/private/ActiveRoomsPage/ActiveRoomsPage'
import Auction from '../components/routing/private/Auction/Auction'
import ChooseCharacter from '../components/routing/private/ChooseCharacter/ChooseCharacter'
import ColiseumPage from '../components/routing/private/ColiseumPage/ColiseumPage'
import IdleRoomsPage from '../components/routing/private/IdleRoomsPage/IdleRoomsPage'
import InventoryPage from '../components/routing/private/InventoryPage/InventoryPage'
import MainPage from '../components/routing/private/MainPage/MainPage'
import MannequinPage from '../components/routing/private/MannequinPage/MannequinPage'
import TrainPage from '../components/routing/private/TrainPage/TrainPage'
import AndreyTest from '../components/routing/public/AndreyTest/AndreyTest'

import AuthorizationPage from '../components/routing/public/AuthorizationPage/AuthorizationPage'
import NotFound from '../components/routing/public/NotFound/NotFound'
import RegistrationPage from '../components/routing/public/RegistrationPage/RegistrationPage'
import './App.css'
import './normalize.css'
import Home from "../components/routing/private/Home/Home";

const socket = io.connect('https://dbforgame.herokuapp.com/')

function App() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const isAuth = useSelector(state => state.isAuth)
    const isLoading = useSelector((state) => state.isLoading)
    const player = useSelector(state => state.player)

    useEffect(() => {
        // (localStorage.getItem('token') !== false) && dispatch(THUNK_ACTION_checkAuth())
        // dispatch(ACTION_getMobs()) //TODO
        player && socket.emit('player-connected', player.nickName)
        return () => {
            player && socket.emit('player-disconnected', player.nickName)
            player && socket.off()
        }

    }, [dispatch])

    if (isLoading) {
        return (<>
            <Navbar/>
            <Loader/>
        </>)
    }
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={
                    (user && player) ?
                        <MainPage/> :
                        (user && !player) ?
                            <Navigate to="/choose-class"/> :
                            !user ?
                                <Navigate to="/register"/> :
                                <Navigate to="/register"/>}/>
                <Route path="/choose-class"
                       element={user && !player ?
                           <ChooseCharacter/> :
                           user && player ?
                               <Navigate to="/"/> :
                               !user &&
                               <Navigate to="/register"/>}/>
                <Route path="/home" element={isAuth ? <Navigate to="/"/> : <Home/>}/>
                <Route path="/register" element={isAuth ? <Navigate to="/"/> : <RegistrationPage/>}/>
                <Route path="/login" element={isAuth ? <Navigate to="/"/> : <AuthorizationPage/>}/>
                <Route path="/train" element={user && player ? <TrainPage/> : <Navigate to="/register"/>}/>
                <Route path="/observer" element={user && player ? <ActiveRoomsPage/> : <Navigate to="/register"/>}/>
                <Route path="/rooms" element={user && player ? <IdleRoomsPage/> : <Navigate to="/register"/>}/>
                {/*<Route path="/main-tower" element={isAuth ? <MainTowerPage/> : <Navigate to="/register"/>}/>*/}
                <Route path="/mannequin" element={user && player ? <MannequinPage/> : <Navigate to="/register"/>}/>
                <Route path="/inventory" element={user && player ? <InventoryPage/> : <Navigate to="/register"/>}/>
                <Route path="/auction" element={user && player ? <Auction/> : <Navigate to="/register"/>}/>
                <Route path="/coliseum" element={user && player ? <ColiseumPage socket={socket}/> : <Navigate to="/register"/>}/>

                <Route path="/test" element={<AndreyTest socket={socket}/>}/>

                <Route path="*" element={<NotFound/>}/>
            </Routes>
            {player && <Footer socket={socket}/>}
        </>
    )
}

export default App
