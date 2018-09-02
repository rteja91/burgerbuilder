import React from 'react';

import cls from './DrawerToggle.css';

const drawerToggle = (props)=> (
    <div className={cls.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;