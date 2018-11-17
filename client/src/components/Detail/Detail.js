import React from 'react';

import './Detail.css';

const detail = (props) => (
  <div className='Detail'>
    <div className='firstName'>{props.firstName}</div>
    <div className='lastName'>{props.lastName}</div>
    <div className='email'>{props.email}</div>
  </div>
);

export default detail;