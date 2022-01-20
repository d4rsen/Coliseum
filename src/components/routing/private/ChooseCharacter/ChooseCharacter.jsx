import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {THUNK_ACTION_setPlayerClass} from '../../../../redux/actions/thunks/thunkSetPlayerClassActions';
import style from './ChooseCharacter.module.css'
import PlayerClassFromPlayerClassPage from '../../../common/PlayerClassFromChooseClassPage/PlayerClassFromPlayerClassPage';

const ChooseCharacter = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const player = useSelector((state) => state.player);
    const navigation = useNavigate();
    const chooseCharacter = useSelector((state) => state.chooseCharacter);
    const [chosenClass, setChosenClass] = useState(1);
    const [inputValue, setInputValue] = useState('');

    const valueHandler = (e) => {
        setInputValue(e.target.value);
    };

    const chooseClassHandler = (e) => {
        e.preventDefault();
        setChosenClass(e.target.id);
    };

    const buttonHandler = (e) => {
        e.preventDefault();
        dispatch(
            THUNK_ACTION_setPlayerClass({
                user_id: user.user.id,
                class_id: Number(chosenClass),
                nickname: inputValue,
            })
        );
        navigation('/');
    };

    return (
        <div className={style.main_div}>
            <div className={style.header_for_choose}>Choose your destiny</div>
            <div className={style.choose__character}>
                <ul className={style.choose__list}>
                    <li><PlayerClassFromPlayerClassPage
                        chooseClassHandler={chooseClassHandler}
                        id={1}
                        src={
                            'https://dbforgame.herokuapp.com/static/img/classes/playerClasses/warrior_man.jpg'
                        }
                    />
                    </li>
                    <li><PlayerClassFromPlayerClassPage
                        chooseClassHandler={chooseClassHandler}
                        id={2}
                        src={
                            'https://dbforgame.herokuapp.com/static/img/classes/playerClasses/assasin_woman.jpg'
                        }
                    />
                    </li>
                    <li><PlayerClassFromPlayerClassPage
                        chooseClassHandler={chooseClassHandler}
                        id={3}
                        src={
                            'https://dbforgame.herokuapp.com/static/img/classes/playerClasses/monk_woman.jpg'
                        }
                    />
                    </li>
                </ul>
                <div className={style.buttons__block}>
                    <input type="text" onChange={valueHandler} value={inputValue}/>
                    <div onClick={buttonHandler} className="">
                        submit
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ChooseCharacter;
