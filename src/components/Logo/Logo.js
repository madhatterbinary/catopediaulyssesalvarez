import React from 'react';

import burgerLogo from '../../../public/assets/images/kittylogo.png';
import s from './../../style/css/logo/logo.css';

const logo = (props) => (
    <div className='logo' >
        <img src={burgerLogo} alt="kitty cat" />
    </div>
);

export default logo;
