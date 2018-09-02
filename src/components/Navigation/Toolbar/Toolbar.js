import React from 'react';

import cls from './Toolbar.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={cls.Toolbar}>
        <DrawerToggle  clicked={props.drawerToggleClicked} ></DrawerToggle>
        <div className={cls.Logo}>
        <Logo />
        </div>
        <nav className={cls.DesktopOnly}>
        <NavigationItems />
        </nav>
    </header>
);


export default toolbar;