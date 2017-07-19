import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';


export default class tabTwo extends React.Component {
  state = {
    name: '',
  };
  render() {
    return (
      <Container>

    
     </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 20
  ,alignSelf:'center'
  },
  textInput: {
    height: 40,
    marginLeft: 15,
  },
});
