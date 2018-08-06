import React, { Component } from 'react';

import './App.css';

import Form from './containers/Form';

class App extends Component {
  render() {
    return (
      <div className="container">
      	<h1>GitHub Finder</h1>
      	<div className="wrapper">
	      	<Form />
	      </div>
      </div>
    );
  }
}

export default App;
