import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../../../../style/css/navigation/navigationItems/navigationitem/navigationItem.css';

const navigationItem = ( props ) => (
    <li className='navigation-item'>
        <NavLink 
            to={props.link}
            exact={props.exact}
            activeClassName='navigation-item active'>{props.children}</NavLink>
    </li>
);

export default navigationItem;
