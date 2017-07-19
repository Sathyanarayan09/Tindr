import React from 'react';
import {
  Platform,StyleSheet
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';
import Home from './components/Home';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key='root' style={{paddingTop: Platform.OS === 'ios' ? 64 : 54}}>
          <Scene key='home'   component={Home}  hideNavBar style={styles.title} />

        </Scene>
      </Router>
    );
  }
}
const styles = StyleSheet.create({
title: {
    alignSelf:'center'
  },

});
