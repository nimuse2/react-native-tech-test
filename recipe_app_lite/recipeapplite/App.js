// Riverford React Native App

import React, { Component} from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';

import styles from './styles/Styles.js';
import Recipe from './components/Recipe';

export default class App extends Component {
 
  render() {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Riverford Recipes</Text>
            <Recipe />
        </SafeAreaView>
      
    )
  }
}