import React from 'react';
import s from './footer.module.css'
import Social from "../ReusableComponents/Social";

const Footer = () => {
    return (
        <section className={s.footer}>
            <div className={s.author}>© 2024 by Alexmiroha</div>
            <div className={s.links}>
                <Social display={["instagram", "github", "linkedin"]} iconColor={'white'}/>
            </div>
        </section>
    );
};

export default Footer;
