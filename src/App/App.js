import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { io } from 'socket.io-client'

import Footer from '../components/layout/Footer/Footer'
import Loader from '../components/layout/Loader/Loader'
import Navbar from '../components/layout/Navbar/Navbar'
import ChooseCharacter from '../components/routing/private/ChooseCharacter/ChooseCharacter'
import ColiseumPage from '../components/routing/private/ColiseumPage/ColiseumPage'
import GymPage from '../components/routing/private/GymPage/GymPage'
import InventoryPage from '../components/routing/private/InventoryPage/InventoryPage'
import MainPage from '../components/routing/private/MainPage/MainPage'
import MannequinPage from '../components/routing/private/MannequinPage/MannequinPage'
import ObserverPage from '../components/routing/private/ObserverPage/ObserverPage'
import RoomsPage from '../components/routing/private/RoomsPage/RoomsPage'
import TrainPage from '../components/routing/private/TrainPage/TrainPage'

import AuthorizationPage from '../components/routing/public/AuthorizationPage/AuthorizationPage'
import NotFound from '../components/routing/public/NotFound/NotFound'
import RegistrationPage from '../components/routing/public/RegistrationPage/RegistrationPage'
import { ACTION_unsetEnemyPlayer } from '../redux/actions/enemyPlayerActions'
import { ACTION_getMobs } from '../redux/actions/mobsActions'
import { ACTION_setPlayerClass } from '../redux/actions/setPlayerClassActions'
import { THUNK_ACTION_checkAuth } from '../redux/actions/thunks/thunkAuthActions'
import { THUNK_ACTION_getAllRoomsFromDb } from '../redux/actions/thunks/thunkGetAllRoomsFromDbActions'
import './App.css'
import './normalize.css'

const socket = io.connect('https://global-chat-socket-io.herokuapp.com/')

// const socket = io.connect('http://localhost:8000/')

function App() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const isAuth = useSelector(state => state.isAuth)
    const isLoading = useSelector((state) => state.isLoading)
    const chooseCharacter = useSelector(state => state.chooseCharacter)
    const allRooms = useSelector(state => state.allRooms)
    const player = useSelector(state => state.player)

    // useEffect(() => {
    //     user && dispatch(THUNK_ACTION_getPlayerFromDb(user.user.id))
    // }, [dispatch, user])

    useEffect(() => {
        localStorage.getItem('token') !== false && dispatch(THUNK_ACTION_checkAuth())
        dispatch(ACTION_getMobs())
        player && dispatch(ACTION_setPlayerClass(player.playerClass))
        !allRooms && dispatch(THUNK_ACTION_getAllRoomsFromDb())
        dispatch(ACTION_unsetEnemyPlayer())
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
                    user && player ?
                        <MainPage/> :
                        user && !player ?
                            <Navigate to="/choose-class"/> :
                            !user || !player ?
                                <Navigate to="/register"/> :
                                <Navigate to="/register"/>}/>
                <Route path="/choose-class"
                       element={user && !player ?
                           <ChooseCharacter/> :
                           user && player ?
                               <Navigate to="/"/> :
                               !user &&
                               <Navigate to="/register"/>}/>
                <Route path="/register" element={isAuth ? <Navigate to="/"/> : <RegistrationPage/>}/>
                <Route path="/login" element={isAuth ? <Navigate to="/"/> : <AuthorizationPage/>}/>
                <Route path="/train" element={user && player ? <TrainPage/> : <Navigate to="/register"/>}/>
                <Route path="/observer" element={user && player ? <ObserverPage/> : <Navigate to="/register"/>}/>
                <Route path="/rooms" element={user && player ? <RoomsPage/> : <Navigate to="/register"/>}/>
                {/*<Route path="/main-tower" element={isAuth ? <MainTowerPage/> : <Navigate to="/register"/>}/>*/}
                <Route path="/gym" element={user && player ? <GymPage/> : <Navigate to="/register"/>}/>
                <Route path="/mannequin" element={user && player ? <MannequinPage/> : <Navigate to="/register"/>}/>
                <Route path="/inventory" element={user && player ? <InventoryPage/> : <Navigate to="/register"/>}/>
                {/*<Route path="/auction" element={user && player ? <Auction/> : <Navigate to="/register"/>}/>*/}
                <Route path="/coliseum" element={user && player ? <ColiseumPage socket={socket}/> : <Navigate to="/register"/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            {player && <Footer socket={socket}/>}
        </>
    )
}

export default App
