import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import s from './../../../style/css/navigation/toolbar/toolbar.css';

const toolbar = ( props ) => (
    <header className='toolbar'>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className='logo'>
            <Logo />
        </div>
        <nav className='desktop-only'>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;
