import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AuthorizationPage from './components/pages/authPages/AuthorizationPage/AuthorizationPage'
import RegistrationPage from './components/pages/authPages/RegistrationPage/RegistrationPage'
import GymPage from './components/pages/locationsPages/GymPage/GymPage'
import InventoryPage from './components/pages/locationsPages/InventoryPage/InventoryPage'
import ObserverPage from './components/pages/locationsPages/ObserverPage/ObserverPage'
import RoomsPage from './components/pages/locationsPages/RoomsPage/RoomsPage'
import TrainPage from './components/pages/locationsPages/TrainPage/TrainPage'
import MainPage from './components/pages/MainPage/MainPage'
import Footer from './components/UI/Footer/Footer'
import Loader from './components/UI/Loader/Loader'
import Navbar from './components/UI/Navbar/Navbar'
import NotFound from './components/UI/NotFound/NotFound'
import { ACTION_getMobs } from './redux/actions/mobsActions'
import { THUNK_ACTION_checkAuth } from './redux/actions/thunk/thunkAuthActions'
import { THUNK_ACTION_getAllRoomsFromDb } from './redux/actions/thunk/thunkGetAllRoomsFromDbActions'
import { THUNK_ACTION_getPlayerFromDb } from './redux/actions/thunk/thunkPlayersFromDbActions'

function App() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const isAuth = useSelector(state => state.isAuth)
    const isLoading = useSelector((state) => state.isLoading)
    useEffect(() => localStorage.getItem('token') && dispatch(THUNK_ACTION_checkAuth()), [])
    useEffect(() => {
        if (user) {
            dispatch(THUNK_ACTION_getPlayerFromDb(user.id))
        }
        dispatch(ACTION_getMobs())
        dispatch(THUNK_ACTION_getAllRoomsFromDb())
    }, [])

    if (isLoading) {
        return (<>
            <BrowserRouter>
                <Navbar/>
                <Loader/>
                <Footer/>
            </BrowserRouter>
        </>)
    }
    return (<BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={isAuth ? <MainPage/> : <RegistrationPage/>}/>
            <Route path="/register" element={<RegistrationPage/>}/>
            <Route path="/login" element={<AuthorizationPage/>}/>
            <Route path="/train" element={isAuth ? <TrainPage/> : <AuthorizationPage/>}/>
            <Route path="/observer" element={isAuth ? <ObserverPage/> : <AuthorizationPage/>}/>
            <Route path="/rooms" element={isAuth ? <RoomsPage/> : <AuthorizationPage/>}/>
            {/*<Route path="/main-tower" element={isAuth ? <MainTowerPage/> : <AuthorizationPage/>}/>*/}
            <Route path="/gym" element={isAuth ? <GymPage/> : <AuthorizationPage/>}/>
            <Route path="/inventory" element={isAuth ? <InventoryPage/> : <AuthorizationPage/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>)
}

export default App
