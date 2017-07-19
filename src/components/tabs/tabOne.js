import React from 'react';
import {
 AppRegistry, View, Image, StyleSheet,Text,TouchableOpacity
} from 'react-native';
import { Container,Content ,Header, Tab, Tabs, TabHeading,Thumbnail } from 'native-base';


import Icon from 'react-native-vector-icons/FontAwesome';
export default class tabOne extends React.Component {

  render() {
    return (
      <Container>
             <Content>
             <View style={styles.tp}>
               <Thumbnail large source={require('../../img/me.jpg')} />
<Text style={styles.tit}>Sathya, 21</Text>
<Text style={styles.tit1}>App Developer</Text>
</View>
<View style={{flexDirection:'row'}}>
<View style={styles.tp2}>
<TouchableOpacity
          style={styles.bbt}>
           <Icon name={"gear"}  size={30} color="gray" />
        </TouchableOpacity>
        <Text style={styles.tit2}>Settings</Text>
</View>
<View style={styles.tp2}>
<TouchableOpacity
          style={styles.bbt}>
           <Icon name={"edit"}  size={30} color="gray" />
        </TouchableOpacity>
        <Text style={styles.tit2}>Edit Info</Text>
</View>
</View>
             </Content>
     </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
flex:1
  },
  tit: {
    fontSize: 30
, fontWeight:'bold',
  },  tit1: {
      fontSize: 20
  , fontWeight:'normal',
},tit2: {
        fontSize: 15
    , fontWeight:'normal',
      },
tp:{
    flex:1,
paddingTop:20,
    alignItems:'center'
  },tp2:{
      flex:1,
  paddingTop:50,
      alignItems:'center'
    },bbt:{
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
     justifyContent:'center',
     width:60,
      height:60,
       backgroundColor:'#fff',
        borderRadius:60,
  }
});
