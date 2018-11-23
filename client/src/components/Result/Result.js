import React from 'react';

import './Result.css';

const result = (props) => (
  <div className='result'>
    <div className='firstName'>{props.firstName}</div>
    <div className='lastName'>{props.lastName}</div>
    <div className='email'>{props.email}</div>
    <div className='eventDate'>{props.eventDate}</div>
    <div><button onClick={props.onClick}>Delete</button></div>
  </div>
);

export default result;