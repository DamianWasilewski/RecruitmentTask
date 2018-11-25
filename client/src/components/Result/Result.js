import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import './Result.css';

library.add(faTrashAlt);

const result = (props) => (
  <div className='result'>
    <div className='firstName'><b>First name:</b> {props.firstName}</div>
    <div className='lastName'><b>Last name:</b> {props.lastName}</div>
    <div className='email'><b>Email:</b> {props.email}</div>
    <div className='eventDate'><b>Event Date:</b>   {props.eventDate}</div>
    <div><button onClick={props.onClick}><FontAwesomeIcon icon='trash-alt'/></button></div>
  </div>
);

export default result;