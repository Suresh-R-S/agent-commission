/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';
import * as firebase from './services/firebase';

export default class Main extends Component<{}> {
  render() {
    return (
      <Provider store = {store}>
        <Routes/>
      </Provider>
    );
  }
}
