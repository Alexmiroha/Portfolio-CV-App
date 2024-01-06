import React, {useRef, useState} from 'react';
import s from './header.module.css'

const Header = () => {

    const [headerActive, setActive] = useState(false);

    const handlerButtonClick = () => {
        setActive(!headerActive)
    }



    return (
        <div className={`${s.header} ${headerActive? s.headerActive : ''}`}>
            <nav className={s.headerContainer}>
                <div className={s.logo}>
                    Alexmiroha.dev
                </div>
                <ul className={`${s.headerButtons} ${headerActive? s.headerButtonsActive : ''}`}>
                    <li className={s.button}>
                        <a href="">Home</a>
                    </li>
                    <li className={s.button}>
                        <a href="">About</a>
                    </li>
                    <li className={s.button}>
                        <a href="">Projects</a>
                    </li>
                    <li className={s.button}>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </nav>
            <button onClick={handlerButtonClick} className={`${s.downButton} ${headerActive? s.downButtonActive: ''}`}>&#9660;</button>
        </div>
    );
};

export default Header;
