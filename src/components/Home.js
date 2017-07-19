import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Tab1 from './tabs/tabOne';
import Tab2 from './tabs/tabTwo';
import Tab3 from './tabs/tabThree';




export default class Home extends React.Component {
  state = {
    name: '',
  };
  render() {
    return (
      <Container>
      <Tabs tabBarUnderlineStyle={{borderBottomWidth:2}}>
<Tab heading="Profile" tabStyle={{backgroundColor: 'white'}} textStyle={{color: '#000'}} activeTabStyle={{backgroundColor: 'white'}} activeTextStyle={{color: '#000', fontWeight: 'normal'}}>
<Tab1/>
</Tab>

<Tab heading="DashBoard" tabStyle={{backgroundColor: 'white'}} textStyle={{color: '#000'}} activeTabStyle={{backgroundColor: 'white'}} activeTextStyle={{color: '#000', fontWeight: 'normal'}}>
<Tab2/>
</Tab>
<Tab heading="Message" tabStyle={{backgroundColor: 'white'}} textStyle={{color: '#000'}} activeTabStyle={{backgroundColor: 'white'}} activeTextStyle={{color: '#000', fontWeight: 'normal'}}>
<Tab3/>
</Tab>



</Tabs>

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

    tabProps : {
 backgroundColor: '#f65857'
}

});
