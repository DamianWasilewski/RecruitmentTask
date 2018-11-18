import { GET_EVENTS, ADD_EVENT, DELETE_EVENT } from './types';

export const getEvents = () => {
  return {
    type: GET_EVENTS
  };
};

export const deleteEvent = (id) => {
  return {
    type: DELETE_EVENT,
    payload: id
  };
};

export const addEvent = event => {
  return {
    type: ADD_EVENT,
    payload: event
  };
};