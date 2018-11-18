import { GET_EVENTS, ADD_EVENT, DELETE_EVENT, EVENTS_LOADING } from '../actions/types';

const initialState = {
  eventDetails: [],
  loading: false
}

export default function (state = initialState, action) {
  switch(action.type) {
    case GET_EVENTS:
      return {
        ...state,
        eventDetails: action.payload,
        loading: false
      };
    case DELETE_EVENT:
      return {
        ...state,
        eventDetails: state.eventDetails.filter(event => event._id !== action.payload)
      };
    case ADD_EVENT:
      return {
        ...state,
        eventDetails: [action.payload, ...state.eventDetails]
      };
    case EVENTS_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}