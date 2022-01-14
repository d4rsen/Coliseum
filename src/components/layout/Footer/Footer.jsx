import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Footer = ({socket}) => {
    const player = useSelector(state => state.player)
    const [state, setState] = useState({message: '', name: player.nickName})
    const [chat, setChat] = useState([])

    useEffect(() => {
        socket.on('message', ({name, message}) => {
            setChat([...chat, {name, message}])
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
        // <div className="text-center p-0 footer-light bg-light fixed-bottom">
        //     © 2022 Copyright: beta-version
        // </div>
        <div className="d-flex flex-row justify-content-between align-items-between ">
            <div>
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
                <form onSubmit={onMessageSubmit}>
                    <input name={'message'} value={state.message} onChange={(e) => inputChangeHandler(e)} type="text"/>
                    <button type={'submit'}>Отправить смс</button>
                </form>
            </div>
        </div>
    )
}

export default Footer
