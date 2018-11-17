import React, { Component } from 'react';
import axios from 'axios';

import Navbar from '../../components/Navbar/Navbar';
import Form from '../../components/Form/Form';

import './AppContainer.css';

class AppContainer extends Component {

  render () {
    return (
      <div>
        <div>
          <Navbar />
        </div>
          <div className='container'>
            <Form />
          </div>
      </div>
    )
  }
}

export default AppContainer;