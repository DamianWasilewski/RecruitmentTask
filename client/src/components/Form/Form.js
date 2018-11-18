import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getEvents, deleteEvent, addEvent } from '../../actions/eventActions';


import './Form.css';

class Form extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    eventDate: ''
  }

  componentDidMount() {
    this.props.getEvents();
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    
    const newEvent = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      eventDate: this.state.eventDate
    }

    this.props.addEvent(newEvent);

    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      eventDate: ''
    });
    console.log(newEvent.eventDate);

  }

  onDeleteClick = (id) => {
    this.props.deleteEvent(id);
    window.location.reload(true);
  }

  render() {
    const { eventDetails } = this.props.event;
    return (
      <div className='formContainer'>
        <div className='form'>
          <form onSubmit={this.onSubmit.bind(this)}>
            <div className='inputs'>
              <input 
              type='text' 
              name='firstName'  
              placeholder='First name'
              onChange={this.onChange}
              value={this.state.firstName}/>
              <input 
              type='text' 
              name='lastName' 
              placeholder='Last name'
              onChange={this.onChange}
              value={this.state.lastName}/>
              <input 
              type='text' 
              name='email' 
              placeholder='Email'
              onChange={this.onChange}
              value={this.state.email}/>
              <input 
              type='date' 
              name='eventDate'  
              placeholder='Date'
              onChange={this.onChange}
              value={this.state.eventDate}/>
            </div>
            <div className='buttonSpace'>
              <button>Send</button>
            </div>
          </form>
        </div>
        <div className='details'>
             {eventDetails.map(({ _id, firstName, lastName, email, eventDate }) => (
              <ul key={_id}>
                <li>{firstName}</li>
                <li>{lastName}</li>
                <li>{email}</li>
                <li>{eventDate.split("T")[0]}</li>
                <button
                onClick={this.onDeleteClick.bind(this, _id)}>Delete</button>
              </ul>
             ))} 
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  getEvents: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  event: state.event
});

export default connect(mapStateToProps, { getEvents, deleteEvent, addEvent })(Form);