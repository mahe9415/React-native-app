import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

// export default class Header extends React.Component {

// }

const Header = (props) => <Text style={styles.Header}>{props.headerText}</Text>;

const styles = StyleSheet.create({
    Header:{
      fontSize:20
    }
  });
export default Header;