/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict'
import React, {
  AppRegistry,
  StyleSheet,
  Component,
  View,
  Image,
} from 'react-native';

import RootController from './app/rootController';

class AwesomeProject extends Component {

  constructor(props){
    super(props);
    var{navigator} = props;
    setTimeout(()=>{
      navigator.replace({name:'RootController',component:rootController})
    },1000);
  }


  render() {
    return (
      <View>
      <Image source={require('./images/LaunchImage.png')} style={styles.backgroundImage}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    backgroundImage:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      width:414,
      height:735,
      resizeMode:'cover'
    }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
