import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ACTION_setChat } from '../../../redux/actions/chatActions'
import style from './Footer.module.css'

const Footer = ({socket}) => {
    const dispatch = useDispatch()
    const player = useSelector((state) => state.player)
    const chat = useSelector((state) => state.chat)
    const [state, setState] = useState({message: '', name: player.nickName})
    const [open, setOpen] = useState(false)

    useEffect(() => {
        socket.on('message', ({name, message}) => {
            dispatch(ACTION_setChat({name, message}))
        })
    }, [socket])

    const onMessageSubmit = (e) => {
        e.preventDefault()
        const {name, message} = state
        socket.emit('message', {name, message})
        setState({message: '', name})
    }

    const inputChangeHandler = (e) =>
        setState({...state, [e.target.name]: e.target.value})

    return (
        <>
            {open === true ? (
                <div className={style.footer__chat}>
                    <form onSubmit={onMessageSubmit}>
                        <input
                            name={'message'}
                            value={state.message}
                            onChange={(e) => inputChangeHandler(e)}
                            type="text"
                        />
                        <div className={style.footer__buttons}>
                            <button className={style.footer__button_send} type={'submit'}>Send message</button>
                            <button className={style.footer__button_close} onClick={() => setOpen(false)}>close chat</button>
                        </div>
                    </form>
                    <div className={style.footer__message}>
                        <p>Сообщения:</p>
                        <ul className={style.footer__list}>
                            {chat &&
                                chat.map((el, i) => {
                                    return (
                                        <li key={i}>
                                            <p>
                                                {el.name}: <span>{el.message}</span>
                                            </p>
                                        </li>
                                    )
                                })}
                        </ul>
                    </div>

                </div>
            ) : (
                <div className={style.button__open}>
                    <button className={style.button__close} onClick={() => setOpen(true)}>
                        Open global chat
                    </button>
                </div>
            )}
        </>
    )
}

export default Footer
