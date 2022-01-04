import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ACTION_PlayerRegenerate } from '../../../redux/actions/playerActions'

const MainPage = () => {
  const dispatch = useDispatch()
  const player = useSelector((state) => state.player)
  const navigation = useNavigate()

  const castles = [
    {
      link: '/train',
      name: 'Казарма новичков',
      img: 'https://wiki.plarium.com/images/b/b8/SF_Barracks.png',
      id: 1,
    },
    {
      link: '/observer',
      name: 'Башня наблюдения ',
      img: 'https://www.pngall.com/wp-content/uploads/5/Tower-PNG-Clipart.png',
      id: 2,
    },
    {
      link: '/main-tower',
      name: 'Главный замок',
      img: 'https://www.pngall.com/wp-content/uploads/2016/06/Castle-PNG.png',
      id: 3,
    },
    {
      link: '/gym',
      name: 'Тренировочный зал',
      img: 'https://purepng.com/public/uploads/large/castle-wlk.png',
      id: 4,
    },
    {
      link: '/inventory',
      name: 'Моя палатка',
      img: 'https://www.downloadclipart.net/large/tent-png-hd.png',
      id: 5,
    },
  ]
  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch(ACTION_PlayerRegenerate())
  //   }, 3000)
  // }, [player])
  useEffect(() => setTimeout(() => dispatch(ACTION_PlayerRegenerate()), 3000), [player])
  return (
    <div className="container row justify-content-center, align-items-center m-auto my-3">
      {castles.map((castle) => (
        <div
          onClick={() => navigation(castle.link)}
          key={castle.id}
          className="col m-0 p-0"
        >
          <img src={castle.img} alt="..." height="140"/>
          <p>{castle.name}</p>
        </div>
      ))}
    </div>
  )
}

export default MainPage