import React from 'react'
import s from './ScrollToTopButton.module.css'


type ScrollButtonPropsType = {
    isDarkMode: boolean
}

export const ScrollButton = (props: ScrollButtonPropsType) => {

    const handlerButtonClick = (targetId: string | null) => {

        if (targetId) {
            const element = document.getElementById(targetId);
            element?.scrollIntoView({behavior: 'smooth'});
        }
    }

    return (
        <button onClick={() => handlerButtonClick('Home')} className={`${s.scroll_button}`}>
            <p>Home</p>
            <div className={s.arrow_1}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </button>
    )
}