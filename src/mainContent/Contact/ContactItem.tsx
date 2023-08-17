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

function FaMapLocationDot() {
    return null;
}

const ContactItem = (props: ContactItemPropsType) => {
    return (
        <div className={s.contactItem}>
            <div className={s.icon}>
                <FaMapMarked color={'#147EFB'} display={props.icon === 1 ? '' : 'none'}/>
                <MdOutlineAlternateEmail color={'#147EFB'} display={props.icon === 2 ? '' : 'none'}/>
            </div>
            <div className={s.name}>
                {props.name}
            </div>
            <a href={props.link} className={s.description}>{props.description}</a>
        </div>
    );
};

export default ContactItem;