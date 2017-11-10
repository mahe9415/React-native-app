import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from './src/components/header'
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.ViewTop}>
      <Header headerText={"Album"}></Header>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  ViewTop:{
    paddingTop : 20,
    height:60,
    justifyContent : 'center',
    alignItems:'center',
    backgroundColor:'#f8f8f8',
    shadowColor:'#000',
    shadowOffset: { width:0, height:2 },
    shadowOpacity:0.2,
    elevation:2,
    position:'relative'
  }
});
