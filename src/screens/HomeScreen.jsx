import React from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Button from '../components/UI/Button'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.home}>
    <View style={styles.app}>
    <Text style={styles.title}>Quiz Game</Text> 
    <Button style={styles.btn} title='Start' onPress={() => navigation.navigate('Game')} />
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
    title: {
      fontSize: 36,
      marginBottom: 10,
    },  
    btn: {
      backgroundColor: 'orange',
      padding: 4,
      width: 100,
      borderRadius: 10,
    },
    home: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: Dimensions.get('screen').height - 100,
    },
    app: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
    },
  });

export default HomeScreen