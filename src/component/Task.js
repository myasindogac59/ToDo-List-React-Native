import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Task({text}) {
  return (
    <View style={styles.containerTask}>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  containerTask: {
    backgroundColor:'#7f8c8d',
    height:80,
    marginVertical:10,
    padding:10,
    margin:20,
    borderRadius:15,
    borderWidth:1,
    borderColor:'#f1f2f6',
  },
  text: {
    color:'#f1f2f6',
    fontSize:20,
    padding:12,
    fontWeight:'500'

  }
})