import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import './Result.css';

library.add(faTrashAlt);

const result = (props) => (
  <div className='result'>
    <div className='firstName'>First name: {props.firstName}</div>
    <div className='lastName'>Last name: {props.lastName}</div>
    <div className='email'>Email: {props.email}</div>
    <div className='eventDate'>Event Date:   {props.eventDate}</div>
    <div><button onClick={props.onClick}><FontAwesomeIcon icon='trash-alt'/></button></div>
  </div>
);

export default result;