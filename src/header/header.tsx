import React, {useState} from 'react';
import s from './header.module.css'

const Header = () => {

    const [headerActive, setActive] = useState(false);

    const handlerButtonClick = (event: any, targetId: string | null) => {

        //header state
        event.preventDefault();
        headerActive ? setActive(false) : setActive(true);


        //scroll to section
        if (targetId) {
            const element = document.getElementById(targetId);
            element?.scrollIntoView({behavior: 'smooth'});
        }
    }


    return (
        <div className={`${s.header} ${headerActive ? s.headerActive : ''}`}>
            <nav className={s.headerContainer}>
                <div className={s.logo}>
                    Alexmiroha.dev
                </div>
                <ul className={`${s.headerButtons} ${headerActive ? s.headerButtonsActive : ''}`}>
                    <li className={s.button}>
                        <a onClick={(event) => handlerButtonClick(event,'Home')} href="#">Home</a>
                    </li>
                    <li className={s.button}>
                        <a onClick={(event) => handlerButtonClick(event,'About')} href="#About">About</a>
                    </li>
                    <li className={s.button}>
                        <a onClick={(event) => handlerButtonClick(event,'Projects')} href="#Projects">Projects</a>
                    </li>
                    <li className={s.button}>
                        <a onClick={(event) => handlerButtonClick(event,'Contact')} href="#Contact">Contact</a>
                    </li>
                </ul>
            </nav>
            <button onClick={(event) => handlerButtonClick(event,null)}
                    className={`${s.downButton} ${headerActive ? s.downButtonActive : ''}`}>&#9660;</button>
        </div>
    );
};

export default Header;
