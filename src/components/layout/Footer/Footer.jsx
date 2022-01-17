import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Footer = ({socket}) => {
    const player = useSelector(state => state.player)
    const [state, setState] = useState({message: '', name: player.nickName})
    const [chat, setChat] = useState([])
    const [open, setOpen] = useState(false)
    const [allChatPlayers, setAllChatPlayers] = useState([])

    useEffect(() => {
        socket.emit('player-connected', player.nickName)
        // return () => {
        //     socket.emit('player-disconnected', player.nickName)
        // }
    }, [])

    useEffect(() => {
        socket.on('message', ({name, message}) => {
            setChat([...chat, {name, message}])
        })
        socket.on('player-connected', (WsChat) => {
            setAllChatPlayers(WsChat)
        })

        socket.on('player-disconnected', (WsChat) => {
            setAllChatPlayers(WsChat)
        })
    }, [socket])

    const onMessageSubmit = (e) => {
        e.preventDefault()
        const {name, message} = state
        socket.emit('message', {name, message})
        setState({message: '', name})
    }

    const inputChangeHandler = (e) => setState({...state, [e.target.name]: e.target.value})

    return (
        <>
            {open === true ? (
                    <div
                        className="d-flex flex-row justify-content-between align-items-between text-center p-0 footer-light bg-light fixed-bottom">
                        <div>
                            <button onClick={() => setOpen(false)}>close chat</button>
                            {chat && chat.map(({name, message}, index) => {
                                return (
                                    <div key={index}>
                                        <p>
                                            {name}: <span>{message}</span>
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            {allChatPlayers && allChatPlayers.map(somePlayer => {
                                return (
                                    somePlayer.name + ' '
                                )
                            })}
                        </div>
                        <div>
                            <form onSubmit={onMessageSubmit}>
                                <input name={'message'} value={state.message} onChange={(e) => inputChangeHandler(e)} type="text"/>
                                <button type={'submit'}>Отправить смс</button>
                            </form>
                        </div>
                    </div>
                )
                : (
                    <div
                        className="d-flex flex-row justify-content-between align-items-between text-center p-0 footer-light bg-light fixed-bottom">
                        <button onClick={() => setOpen(true)}>open chat</button>
                    </div>
                )
            }

        </>)
}

export default Footer
