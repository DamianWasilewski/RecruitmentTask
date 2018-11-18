import { GET_EVENTS, ADD_EVENT, DELETE_EVENT } from '../actions/types';

const initialState = {
  eventDetails: [
    {
      id: 1,
      firstName: 'Damian2',
      lastName: 'Wasilewski2',
      email:  'damian.wasilewski1993@gmail.com'
    },
    {
      id: 2,
      firstName: 'Damian3',
      lastName: 'Wasilewski3',
      email:  'damian.wasilewski1993@gmail.com'
    }
  ]
}

export default function (state = initialState, action) {
  switch(action.type) {
    case GET_EVENTS:
      return {
        ...state
      };
    case DELETE_EVENT:
      return {
        ...state,
        eventDetails: state.eventDetails.filter(event => event.id !== action.payload)
      };
    case ADD_EVENT:
      return {
        ...state,
        eventDetails: [action.payload, ...state.eventDetails]
      }
    default:
      return state;
  }
}