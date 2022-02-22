import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import ChooseClassPage from '../components/pages/private/ChooseClassPage/ChooseClassPage'
import ColiseumPage from '../components/pages/private/ColiseumPage/ColiseumPage'
import DungeonPage from '../components/pages/private/DungeonPage/DungeonPage'
import IdleRoomsPage from '../components/pages/private/IdleRoomsPage/IdleRoomsPage'
import InventoryPage from '../components/pages/private/InventoryPage/InventoryPage'
import MainCastlePage from '../components/pages/private/MainCastlePage/MainCastlePage'
import MainPage from '../components/pages/private/MainPage/MainPage'
import MannequinPage from '../components/pages/private/MannequinPage/MannequinPage'
import MarketPage from '../components/pages/private/MarketPage/MarketPage'
import AuthorizationPage from '../components/pages/public/AuthorizationPage/AuthorizationPage'
import HomePage from '../components/pages/public/HomePage/HomePage'
import RegistrationPage from '../components/pages/public/RegistrationPage/RegistrationPage'

const Router = ({socket}) => {
    const user = useSelector(state => state.user)
    const player = useSelector(state => state.player)

    return (
        <Routes>
            <Route path="/"
                   element={
                       (user && player)
                           ? <MainPage/>
                           : (user && !player)
                               ? <Navigate to="/choose-class"/>
                               : <Navigate to="/home"/>}
            />
            <Route path="/choose-class"
                   element={
                       (user && !player)
                           ? <ChooseClassPage/>
                           : (user && player)
                               ? <Navigate to="/"/>
                               : <Navigate to="/home"/>}
            />
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/registration" element={<RegistrationPage/>}/>
            <Route path="/authorization" element={<AuthorizationPage/>}/>
            <Route path="/main-tower" element={player ? <MainCastlePage/> : <Navigate to="/"/>}/>
            <Route path="/inventory" element={player ? <InventoryPage/> : <Navigate to="/"/>}/>
            <Route path="/dungeon" element={player ? <DungeonPage/> : <Navigate to="/"/>}/>
            <Route path="/mannequin" element={player ? <MannequinPage/> : <Navigate to="/"/>}/>
            <Route path="/rooms" element={player ? <IdleRoomsPage/> : <Navigate to="/"/>}/>
            <Route path="/coliseum" element={player ? <ColiseumPage socket={socket}/> : <Navigate to="/"/>}/>
            <Route path="/auction" element={player ? <MarketPage/> : <Navigate to="/"/>}/>
        </Routes>
    )
}

export default Router
