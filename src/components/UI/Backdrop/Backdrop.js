import React from 'react';
import s from './../../../style/css/backdrop/backdrop.css';

const backdrop = (props) => (
    props.show ? <div className='backdrop' onClick={props.clicked}></div> : null
);

export default backdrop;
