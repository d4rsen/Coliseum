import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import style from './Footer.module.css';

const Footer = ({ socket }) => {
  const player = useSelector((state) => state.player);
  const [state, setState] = useState({ message: '', name: player.nickName });
  const [chat, setChat] = useState([]);
  const [open, setOpen] = useState(false);
  const [allChatPlayers, setAllChatPlayers] = useState([]);
  // chat.reverse()
  useEffect(() => {
    socket.on('message', ({ name, message }) => {
      setChat([  ...chat,{ name, message } ]);
    });
    socket.on('player-connected', (WsChat) => {
      setAllChatPlayers(WsChat);
    });

    socket.on('player-disconnected', (WsChat) => {
      setAllChatPlayers(WsChat);
    });
  }, [socket, chat,allChatPlayers]);

 

  const onMessageSubmit = (e) => {
    e.preventDefault();
    const { name, message } = state;
    socket.emit('message', { name, message });
    setState({ message: '', name });
  };

  const inputChangeHandler = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });

  return (
    <>
      {open === true ? (
        <div className={style.footer__chat}>
          <div className={style.button__close}>
            <button onClick={() => setOpen(false)}>close chat</button>
            <ul className={style.footer__list}>
              {chat &&
                chat.map((el, i) => {
                 return (
                    <li key={i}>
                  
                       <p>{el.name}: <span>{el.message}</span></p> 
                    
                    </li>
                  );
                })}
            </ul>
          </div>
         

         
          <div className={style.some__player__name}>
            {allChatPlayers &&
              allChatPlayers.map((somePlayer) => {
                return somePlayer.name + ' ';
              })}
          </div>
          <form onSubmit={onMessageSubmit}>
            <input
              name={'message'}
              value={state.message}
              onChange={(e) => inputChangeHandler(e)}
              type="text"
            />
            <button type={'submit'}>Отправить смс</button>
          </form>
        </div>
      ) : (
        <div className={style.button__open}>
          <button onClick={() => setOpen(true)}>open chat</button>
        </div>
      )}
    </>
  );
};

export default Footer;
