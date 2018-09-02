import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import cls from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = (props) => {
    let attachClasses = [cls.SideDrawer, cls.Close];
    if(props.open){
        attachClasses = [cls.SideDrawer, cls.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachClasses.join(" ")}>
            <div className={cls.Logo}>
            <Logo  />
            </div>
            <nav>
                <NavigationItems />
            </nav>
            
        </div>
        </Aux>
    );
}

export default sideDrawer;