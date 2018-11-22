import reducer from './eventReducer';
import { GET_EVENTS, ADD_EVENT, DELETE_EVENT } from '../actions/types';

describe('event reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      eventDetails: [],
      loading: false
    });
  })

  it('should store data from db upon mounting component', () =>{
    expect(reducer({}, {
      type: GET_EVENTS,
      payload: [
        {
          firstName: 'Damian',
          lastName: 'Wasilewski'
        }
      ]
    })
  ).toEqual({
    eventDetails: [
      {
        firstName: 'Damian',
        lastName: 'Wasilewski'
      }
    ],
    loading: false
  })
  });

  it('should add new record to existing one/ones in eventDetails array of objects', () => {
    expect(reducer({
      eventDetails: [
        {
          firstName: 'Damian',
          lastName: 'Wasilewski'
        }
      ],
      loading: false
    }, {
      type: ADD_EVENT,
      payload: {
        firstName: 'Marek',
        lastName: 'Marecki'
      }
    })).toEqual({
      eventDetails: [
        {
          firstName: 'Marek',
          lastName: 'Marecki'
        },
        {
          firstName: 'Damian',
          lastName: 'Wasilewski'
        }
      ],
      loading: false
    })
  })

  it('should delete one existing record from eventDetails array of objects by id', () => {
    expect(reducer({
      eventDetails: [
        {
          id: 1,
          firstName: 'Damian',
          lastName: 'Wasilewski'
        }
      ],
      loading: false
    }, {
      type: DELETE_EVENT,
      eventDetails: [
        {
          id: 1
        }
      ],
      loading: false
    })).toEqual({
      eventDetails: [],
      loading: false
    })
  })
})