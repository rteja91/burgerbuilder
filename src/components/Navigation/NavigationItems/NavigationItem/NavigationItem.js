import React from 'react';
import { NavLink } from 'react-router-dom';
import cls from './NavigationItem.css';

const navigationItem = (props) => (
    <li className={cls.NavigationItem}>
        <NavLink
            to={props.link}
            exact={props.exact}
            activeClassName={cls.active}
        >{props.children}</NavLink>

    </li>
);

export default navigationItem;