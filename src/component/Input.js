import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import Task from './Task'

export default function Input() {
  const [task, setTask] = React.useState()
  const [taskItems, setTaskItems] = React.useState([])
  const handleAddTask = () => {
    setTaskItems([...taskItems, task])
    setTask(null)
  }
  const completeTask = (index) => {
    let copyItems = [...taskItems];
    copyItems.splice(index, 1);
    setTaskItems(copyItems)
  }
  return (
    <View>
      {taskItems.map((item, index) => {
        return  (
          <TouchableOpacity  key={index} onPress={()=> completeTask(index)}>
            <Task text={item}/>
          </TouchableOpacity>
        )
      })}
    <View style={styles.inputContainer}>
      <TextInput 
      style={styles.input}
      placeholder='Add...'
      value={task}
      onChangeText={text => setTask(text)}
      />
      <View style={styles.button}>
        <Button
        title='Save'
        color={'#7f8c8d'}
        onPress={()=> handleAddTask()}
        />
      </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer:{
    display:'flex',
    // justifyContent:'flex-end',
    borderWidth:2,
    borderColor:'#dfe6e9',
    margin:20,
    backgroundColor:'#ecf0f1',
    padding:15,
    borderRadius:15,
  },
  input:{
    color:'black',
    fontSize:20,
    fontWeight:'bold',
    backgroundColor:'#dfe6e9',
    borderRadius:10,
    height:40,
    fontStyle:'italic'
  },
  button:{
    margin:10,
    padding:30,
  },
})