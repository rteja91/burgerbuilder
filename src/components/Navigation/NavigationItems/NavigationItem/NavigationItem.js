import React from 'react';

import cls from './NavigationItem.css';

const navigationItem = (props) => (
    <li className={cls.NavigationItem}>
    <a 
        href={props.link} 
        className={props.active ? cls.active : null}>{props.children}</a>

    </li>
);

export default navigationItem;