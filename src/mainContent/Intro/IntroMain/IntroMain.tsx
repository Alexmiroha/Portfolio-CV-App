import React from 'react';
import s from './IntroMain.module.css'

const IntroMain = () => {
    return (
        <div className={s.introMain}>
            <div className={s.text}>
                <h1 className={s.title}>Front-End React Developer</h1>
                <p className={s.description}>
                    Hi, I'm Oleksii Miroshnichenko. A passionate Front-end React Developer
                    based in Warsaw, Poland.
                </p>
            </div>
            <div className={s.image}>
                image
            </div>
        </div>
    );
};

export default IntroMain;
