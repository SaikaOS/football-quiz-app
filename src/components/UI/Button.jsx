import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({title, style, onPress}) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
    <Text style={{textAlign: 'center'}}>{title}</Text>
  </TouchableOpacity>
  )
}

export default Button