import React from 'react';
import Logo from '../../assets/images/burger-logo.png'
import cls from './Logo.css';
const logo = (props) => (
    <div className={cls.Logo} style={{height:props.height}}>
        <img src={Logo} alt="MyBurger" />
    </div>
);

export default logo;