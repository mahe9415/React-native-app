import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text> This is iOS</Text>
       <Image source={{uri:"https://www.dumpaday.com/wp-content/uploads/2017/11/00-58-620x280.jpg" }} style={{width: 100, height: 100}}/>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
