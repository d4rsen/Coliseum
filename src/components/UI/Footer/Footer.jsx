import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ACTION_setChat } from '../../../redux/actions/chatActions'
import './Footer.scss'

const Footer = ({socket}) => {
    const dispatch = useDispatch()
    const player = useSelector((state) => state.player)
    const chat = useSelector((state) => state.chat)
    const [inputValue, setInputValue] = useState({message: '', name: player.nickName})
    const [open, setOpen] = useState(false)

    useEffect(() => {
        socket.on('message', ({name, message}) => {
            dispatch(ACTION_setChat({name, message}))
        })
    }, [socket])

    const onMessageSubmit = (e) => {
        e.preventDefault()
        const {name, message} = inputValue
        socket.emit('message', {name, message})
        setInputValue({message: '', name})
    }

    const inputChangeHandler = (e) => setInputValue({...inputValue, message: e.target.value})

    const chatHandler = (e) => {
        e.preventDefault()
        setOpen(!open)
    }
    return (
        <>
            {open
                ? (<footer className="footer">
                        <div className="footer__left">
                            <div className="footer__chat">
                                {chat && chat.map((message, i) =>
                                    <div key={i} className="footer__message message">
                                        <div className="message__name">
                                            {message.name}{': '}
                                        </div>
                                        <div className="message__text">
                                            {message.message}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="footer__right">
                            <form onSubmit={onMessageSubmit} className="footer__form">
                                <input value={inputValue.message}
                                       onChange={inputChangeHandler}
                                       type="text"
                                       className="footer__input"
                                />
                                <div className="footer__buttons">
                                    <button type="submit" className="footer__button-send">
                                        send
                                    </button>
                                </div>
                                <button
                                    onClick={chatHandler}
                                    className="footer__button-close"
                                >
                                    close chat
                                </button>
                            </form>
                        </div>
                    </footer>
                )
                :
                (<footer className="footer-small">
                    <button
                        onClick={chatHandler}
                        className="footer__button-open"
                    >
                        open chat
                    </button>
                </footer>)}
        </>
    )
}

export default Footer
