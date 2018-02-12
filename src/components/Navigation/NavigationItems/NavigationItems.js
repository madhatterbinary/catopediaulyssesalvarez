import React from 'react';
import s from './../../../style/css/navigation/navigationItems/navigationitems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ( props ) => (
    <ul className='navigation-item'>
        <NavigationItem link="/" exact>BREEDS</NavigationItem>
        <NavigationItem link="/history">HISTORY</NavigationItem>
        <NavigationItem link="/about">ABOUT</NavigationItem>
        <NavigationItem link="/contact">CONTACT</NavigationItem>
    </ul>
);

export default navigationItems;
