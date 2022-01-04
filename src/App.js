import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthorizationPage from './components/pages/authPages/AuthorizationPage/AuthorizationPage'
import RegistrationPage from './components/pages/authPages/RegistrationPage/RegistrationPage'
import InventoryPage from './components/pages/locationsPages/InventoryPage/InventoryPage'
import ObserverPage from './components/pages/locationsPages/ObserverPage/ObserverPage'
import TrainPage from './components/pages/locationsPages/TrainPage/TrainPage'
import MainPage from './components/pages/MainPage/MainPage'
import Footer from './components/UI/Footer/Footer'
import Loader from './components/UI/Loader/Loader'
import Navbar from './components/UI/Navbar/Navbar'
import NotFound from './components/UI/NotFound/NotFound'
import { ACTION_getMobs } from './redux/actions/mobsActions'
import {
  THUNK_ACTION_getEnemyPlayerFromDb,
  THUNK_ACTION_getPlayerFromDb
} from './redux/actions/thunkPlayersFromDbActions'

function MainTowerPage() {
  return null
}

function GymPage() {
  return null
}

function App() {
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.isLoading)
  useEffect(() => {
    dispatch(THUNK_ACTION_getPlayerFromDb())
    dispatch(THUNK_ACTION_getEnemyPlayerFromDb())
    dispatch(ACTION_getMobs())
  }, [])

  if (isLoading) {
    return <Loader/>
  }
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/register" element={<RegistrationPage/>}
        />
        <Route path="/login" element={<AuthorizationPage/>}
        />

        <Route path="/train" element={<TrainPage/>}
        />
        <Route path="/observer" element={<ObserverPage/>}
        />
        <Route path="/main-tower" element={<MainTowerPage/>}
        />
        <Route path="/gym" element={<GymPage/>}
        />
        <Route path="/inventory" element={<InventoryPage/>}
        />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
