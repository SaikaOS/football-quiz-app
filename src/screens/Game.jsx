import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import {data} from '../data'
import PopUp from '../components/UI/PopUp'
import Content from '../components/Content'

const Game = ({navigation}) => {
  const [questionIdx, setQuestionIdx] = useState(0)
  const [show, setShow] = useState(false)
  const [score, setScore] = useState(0)

  return (
    <View style={styles.game}>
        <PopUp show={show} score={score} data={data} navigation={navigation}/>
         <View>
         <Text style={styles.question}>{data[questionIdx].id}. {data[questionIdx].question}</Text>
          <Content data={data} questionIdx={questionIdx} setQuestionIdx={setQuestionIdx}
          setShow={setShow} setScore={setScore} score={score}/>
         </View>
    </View>
  )
}

const styles = StyleSheet.create({
    question: {
      fontSize: 30,
      marginBottom: 20,
    },
    game: {
      paddingHorizontal: 20, 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      flex: 1,
    }
  });

export default Game