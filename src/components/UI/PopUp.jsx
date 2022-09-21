import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native'
import React from 'react'

const PopUp = ({show, score, data, navigation}) => {
  return (
    <Modal visible={show}>
    <View style={styles.modal}>
    <Text style={styles.title}>You score is {score} from {data.length}!</Text>
    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
      <Text style={styles.btnText}>Back to Home</Text>
    </TouchableOpacity>
    </View>
  </Modal>
  )
}

const styles = StyleSheet.create({
  modal: {
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    flex: 1,
  },
  btn: {
    padding: 4, 
    backgroundColor: 'orange', 
    width: 200,
    borderRadius: 5,
    marginTop: 30,
  },
  btnText: {
    textAlign: 'center'
  },
  title: {
    fontSize: 24,
  }
})

export default PopUp