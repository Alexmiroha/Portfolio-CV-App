import React from 'react';
import s from './Contact.module.css'

import {BlueTitle} from "../../ReusableComponents/blueTitle";
import {MainTitle} from "../../ReusableComponents/mainTitle";
import ContactItem from "./ContactItem";

type ContactPropsType = {
    isDarkMode: boolean
}

const Contact = (props:ContactPropsType) => {
    return (
        <section className={`${s.contactSection} ${props.isDarkMode? s.darkMode : ''}`} id='Contact'>
            <div className='contentContainer'>
                <div className={s.contact}>
                    <div className={s.title}>
                        <BlueTitle title={'CONTACT'}/>
                        <MainTitle title={'Dont be shy! Hit me up! 👇'}/>
                    </div>
                    <div className={s.contactsItems}>
                        <ContactItem icon={1} name={'Location'} description={'Warsaw, Poland'}
                                     link={'https://goo.gl/maps/GvkfXcFuSzAmb7966'} isDarkMode={props.isDarkMode}/>
                        <ContactItem icon={2} name={'E-Mail'} description={'Alexmiroha1@gmail.com'}
                                     link={'mailto: Alexmiroha1@gmail.com'} isDarkMode={props.isDarkMode}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;