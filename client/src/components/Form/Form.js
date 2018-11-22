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
    eventDate: '',
    errorMessage: '',
    validation: false
  }

  componentDidMount() {
    this.props.getEvents();
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    const { firstName, lastName, email, eventDate} = this.state

    if (firstName, lastName, eventDate, email) {
      this.setState({validation: true})
      if (new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email)) {
        this.setState({validation: true}, () => {
          const newEvent = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            eventDate: eventDate
          }
          this.props.addEvent(newEvent);
    
          this.setState({
            firstName: '',
            lastName: '',
            email: '',
            eventDate: '',
            validation: false,
            errorMessage: ''
          })
        })
      } else {
        this.setState({validation: false, errorMessage: 'Please enter correct email adress'})
      }
    } else {
      this.setState({validation: false, errorMessage: 'Please fill in all fields properly'})
    }
    e.preventDefault();
  }

  onDeleteClick = (id) => {
    this.props.deleteEvent(id);
    window.location.reload(true);
  }

  render() {
    const { eventDetails } = this.props.event;
    return (
      <div className='formContainer'>
        <p>{this.state.errorMessage}</p>
        <div className='form'>
          <form className='eventForm' onSubmit={this.onSubmit.bind(this)}>
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
                <li>{eventDate}</li>
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