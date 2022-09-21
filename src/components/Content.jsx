import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

const Content = ({data, questionIdx, setQuestionIdx, setScore, setShow, score}) => {
  const handleClick = (answer) => {
    if(questionIdx === data.length - 1) {
      setShow(true)
    }
    else {
      setQuestionIdx(questionIdx + 1)
    }
    if(answer === data[questionIdx].answer) {
      setScore(score + 1)
    }
  }
  return (
    <View style={styles.variants}>
    {data[questionIdx].variants.map(variant => (
      <TouchableOpacity 
      style={styles.btn} 
      onPress={() => handleClick(variant)}>
        <Text style={styles.variant} key={Math.random()}>{variant}</Text>
      </TouchableOpacity>
    ))}
  </View>
  )
}

const styles = StyleSheet.create({
    variants: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginBottom: 20,
      marginHorizontal: 10,
    },
    variant: {
      fontSize: 24,
      textAlign: 'center'
    },
    btn: {
      backgroundColor: 'orange',
      width: Dimensions.get('screen').width - 60, 
      borderRadius: 10,
      marginBottom: 20
    }
  });

export default Content