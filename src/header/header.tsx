import React from 'react';
import s from './header.module.css'

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.headerContainer}>
                <div className={s.logo}>
                    Alexmiroha.dev
                </div>
                <ul className={s.headerButtons}>
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
            </div>

        </div>
    );
};

export default Header;
