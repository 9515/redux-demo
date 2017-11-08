import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; 
import { connect } from 'react-redux';
import MyComponent from './mycomponent';

function mapStateToProps(state) {
  return {
    text: state.text,
    name: state.name
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onChange: (e) => dispatch({
      type: 'change',
      payload: e.target.value
    })
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyComponent)

export default App;
