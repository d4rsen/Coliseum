import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { io } from 'socket.io-client'

import Footer from '../components/layout/Footer/Footer'
import Loader from '../components/layout/Loader/Loader'
import Navbar from '../components/layout/Navbar/Navbar'
import Auction from '../components/routing/private/Auction/Auction'
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
import { ACTION_getMobs } from '../redux/actions/mobsActions'
import { THUNK_ACTION_checkAuth } from '../redux/actions/thunks/thunkAuthActions'
import { THUNK_ACTION_getPlayerFromDb } from '../redux/actions/thunks/thunkPlayersFromDbActions'
import './App.css'
import './normalize.css'

const socket = io.connect('http://localhost:8000')

function App() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const isAuth = useSelector(state => state.isAuth)
    const isLoading = useSelector((state) => state.isLoading)
    const chooseCharacter = useSelector(state => state.chooseCharacter)
    const player = useSelector(state => state.player)

    useEffect(() => localStorage.getItem('token') !== false && dispatch(THUNK_ACTION_checkAuth()), [])
    // useEffect(() => user && dispatch(THUNK_ACTION_getPlayerFromDb(user.id)), [chooseCharacter])
    useEffect(() => dispatch(ACTION_getMobs()), [])
    useEffect(() => {
        user && dispatch(THUNK_ACTION_getPlayerFromDb(user.user.id))
    }, [chooseCharacter])

    if (isLoading) {
        return (<>
            <BrowserRouter>
                <Navbar/>
                <Loader/>
                {player && <Footer socket={socket}/>}
            </BrowserRouter>
        </>)
    }
    return (<BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={
                isAuth && player ?
                    <MainPage/> :
                    isAuth && !player ?
                        <Navigate to="/choose-class"/> :
                        <Navigate to="/register"/>}/>
            <Route path="choose-class"
                   element={isAuth && !player ?
                       <ChooseCharacter/> :
                       isAuth && player ?
                           <Navigate to="/"/> :
                           !isAuth &&
                           <Navigate to="/register"/>}/>
            <Route path="/register" element={isAuth ? <Navigate to="/"/> : <RegistrationPage/>}/>
            <Route path="/login" element={isAuth ? <Navigate to="/"/> : <AuthorizationPage/>}/>
            <Route path="/train" element={isAuth ? <TrainPage/> : <Navigate to="/register"/>}/>
            <Route path="/observer" element={isAuth ? <ObserverPage/> : <Navigate to="/register"/>}/>
            <Route path="/rooms" element={isAuth ? <RoomsPage/> : <Navigate to="/register"/>}/>
            {/*<Route path="/main-tower" element={isAuth ? <MainTowerPage/> : <Navigate to="/register"/>}/>*/}
            <Route path="/gym" element={isAuth ? <GymPage/> : <Navigate to="/register"/>}/>
            <Route path="/mannequin" element={isAuth ? <MannequinPage/> : <Navigate to="/register"/>}/>
            <Route path="/inventory" element={isAuth ? <InventoryPage/> : <Navigate to="/register"/>}/>
            <Route path="/auction" element={isAuth ? <Auction/> : <Navigate to="/register"/>}/>
            <Route path="/coliseum" element={isAuth ? <ColiseumPage socket={socket}/> : <Navigate to="/register"/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        {player && <Footer socket={socket}/>}
    </BrowserRouter>)
}

export default App
