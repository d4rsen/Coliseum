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
import { THUNK_ACTION_getAllRoomsFromDb } from './redux/actions/thunkGetAllRoomsFromDbActions'
import { THUNK_ACTION_getPlayerFromDb } from './redux/actions/thunkPlayersFromDbActions'

function App() {
    const dispatch = useDispatch()
    const isLoading = useSelector((state) => state.isLoading)
    useEffect(() => {
        dispatch(THUNK_ACTION_getPlayerFromDb())
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
            <Route path="/" element={<MainPage/>}/>
            <Route path="/register" element={<RegistrationPage/>}/>
            <Route path="/login" element={<AuthorizationPage/>}/>
            <Route path="/train" element={<TrainPage/>}/>
            <Route path="/observer" element={<ObserverPage/>}/>
            <Route path="/rooms" element={<RoomsPage/>}/>
            {/*<Route path="/main-tower" element={<MainTowerPage/>}/>*/}
            <Route path="/gym" element={<GymPage/>}/>
            <Route path="/inventory" element={<InventoryPage/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>)
}

export default App
