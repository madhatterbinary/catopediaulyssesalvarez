import React from 'react';

import s from './../../../../style/css/navigation/sidedrawer/drawertoggle/drawertoggle.css';

const drawerToggle = (props) => (
    <div className='drawer-toggle' onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;
