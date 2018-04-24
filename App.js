/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'user strict';

import React, { Component } from 'react';
import SearchPage from './SearchPage';
import {
  StyleSheet,
  NavigatorIOS
} from 'react-native';

type Props = {};
export default class App extends Component<{}> {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
  container: {
    flex: 1,
  },
});
