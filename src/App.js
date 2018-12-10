import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Routes from './route';
import './config/ReactotronConfig';


export default class App extends Component {
  render() {
    return (
      <Routes />
    );
  }
}
