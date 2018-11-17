import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Detail from '../Detail/Detail';

import './Form.css';

class Form extends Component {
  state = { 
        id: 1,
        firstName: 'Damian2',
        lastName: 'Wasilewski2',
        email:  'damian.wasilewski1993@gmail.com'
  
  }

  render() {
    const { userDetails } = this.state;
    return (
      <div className='formContainer'>
        <div className='form'>
          <form>
            <div className='inputs'>
              <input type='text'  placeholder='First name'/>
              <input type='text'  placeholder='Last name'/>
              <input type='text'  placeholder='Email'/>
            </div>
            <div className='buttonSpace'>
              <button>Send</button>
            </div>
          </form>
        </div>
        <div className='details'>
          <ul>
            <Detail key={this.state.id} firstName={this.state.firstName} lastName={this.state.lastName} email={this.state.email} />
          </ul>
        </div>
      </div>
    );
  }

}

export default Form;