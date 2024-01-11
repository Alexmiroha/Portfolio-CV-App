import React from 'react';
import s from './ContactItem.module.css'
import {FaMapMarked} from "react-icons/fa";
import {MdOutlineAlternateEmail} from "react-icons/md";

export type ContactItemPropsType = {
    icon: number,
    name: string,
    description: string,
    link: string | undefined
}

const ContactItem = (props: ContactItemPropsType) => {
    return (
        <div className={s.contactItem}>
            <div className={s.icon}>
                <FaMapMarked color={'#147EFB'} display={props.icon === 1 ? '' : 'none'} size={30}/>
                <MdOutlineAlternateEmail color={'#147EFB'} display={props.icon === 2 ? '' : 'none'} size={30}/>
            </div>
            <div className={s.description}>
                <div className={s.context}>
                    {props.name}
                </div>
                <a href={props.link} className={s.link}>{props.description}</a>
            </div>
        </div>
    );
};

export default ContactItem;