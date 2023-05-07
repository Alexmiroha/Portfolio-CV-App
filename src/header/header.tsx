import React from 'react';
import s from './header.module.css'

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.headerContainer}>
                <div className={s.logo}>
                    Alexmiroha.dev
                </div>
                <div className={s.buttons}>
                    <button className={s.button}>Home</button>
                    <button className={s.button}>About</button>
                    <button className={s.button}>Projects</button>
                    <button className={s.button}>Contact</button>
                </div>
            </div>

        </div>
    );
};

export default Header;
