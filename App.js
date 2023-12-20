import { StyleSheet, Text, View} from 'react-native';
import Input from './src/component/Input';
export default function App({}) {

  return (
    <View style={styles.container}>
      <View style={styles.taskContainer}>
     <Text style={styles.header}>Tasks</Text>
     </View>
     <View style={styles.componentTask}>
      <Input/>
     </View>
     </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfe6e9',
  },
  header: {
    fontSize:35,
    fontWeight:'500',
    marginLeft:5,
    fontStyle:'italic',
    padding:5
  },
  taskContainer: {
    backgroundColor:'#f1f2f6',
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottomWidth:1,
    borderColor:'#dfe6e9'

  },
  counter: {
    fontSize:30,
    fontWeight:'bold',
    marginRight:7,
    fontStyle:'italic'
  },
  componentTask: {
    justifyContent:'flex-end',
    flex:1
  }
});
