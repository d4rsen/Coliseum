import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

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
import { THUNK_ACTION_getPlayerFromDb } from './redux/actions/thunk/thunkPlayersFromDbActions'

function App() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const isAuth = useSelector(state => state.isAuth)
    const isLoading = useSelector((state) => state.isLoading)
    const chooseCharacter = useSelector(state => state.chooseCharacter)

    useEffect(() => localStorage.getItem('token') !== false && dispatch(THUNK_ACTION_checkAuth()), [])
    // useEffect(() => user && dispatch(THUNK_ACTION_getPlayerFromDb(user.id)), [chooseCharacter])
    useEffect(() => dispatch(ACTION_getMobs()), [])
    useEffect(() => {
        chooseCharacter && dispatch(THUNK_ACTION_getPlayerFromDb(user.user.id))
    }, [chooseCharacter])

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
            <Route path="/" element={isAuth ? <MainPage/> : <Navigate to="/register"/>}/>
            <Route path="/register" element={isAuth ? <Navigate to="/"/> : <RegistrationPage/>}/>
            <Route path="/login" element={isAuth ? <Navigate to="/"/> : <AuthorizationPage/>}/>
            <Route path="/train" element={isAuth ? <TrainPage/> : <Navigate to="/register"/>}/>
            <Route path="/observer" element={isAuth ? <ObserverPage/> : <Navigate to="/register"/>}/>
            <Route path="/rooms" element={isAuth ? <RoomsPage/> : <Navigate to="/register"/>}/>
            {/*<Route path="/main-tower" element={isAuth ? <MainTowerPage/> : <Navigate to="/register"/>}/>*/}
            <Route path="/gym" element={isAuth ? <GymPage/> : <Navigate to="/register"/>}/>
            <Route path="/inventory" element={isAuth ? <InventoryPage/> : <Navigate to="/register"/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>)
}

export default App
