import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import userContext from '../usersContext'
import { useContext } from 'react'
import Message from '../components/Message'
import HistoryCapsule from '../components/HistoryCapsule'
import { useNavigation } from '@react-navigation/native'

const History = () => {

  let nav = useNavigation()
  const {history} = useContext(userContext)
  const {setHistory} = useContext(userContext)

  const exit = ()=>
  {
    nav.navigate('EnCourse')
  }
  const hisCon = ()=>
  {
    return conver = history.map((val,idx)=>
    {
      return <HistoryCapsule idx={idx}  val={val}/>
    })
  }
  return (
    <View style={styles.container}>
      <Text onPress={exit} style={styles.x}>X</Text>
      <Text style={styles.title}>Conversations {'\n'} History</Text>
      <ScrollView style={styles.scroll}>
      {hisCon()}
      </ScrollView>
    </View>
  )
}

export default History

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'green',
    display:'flex',
    flexDirection:'column',
    alignItems:"center",
    justifyContent:'center',
    borderWidth:0,
    borderColor:'green',
  },
  x:{
    position:'absolute',
    top:70,
    fontSize:30,
    color:'white',
    left:30
  },
  scroll:{
    width:'90%',
    backgroundColor:'white',
    marginTop:190,
    marginBottom:50,
    paddingBottom:50,
    borderWidth:3,
    borderRadius:20,
    borderColor:'white'
  },
  title:{
    alignSelf:'center',
    fontSize:30,
    color:'white',
    top:100,
    position:'absolute'
  },
  customer:{
    borderWidth:3,
    borderRadius:20,
    backgroundColor:'white',
    padding:10,
    // marginBottom:50,
    margin:10,
    left:10,
    // paddingRight:20,
    borderColor:'white',
    color:'white',
    borderStyle:'solid',
    flexDirection:'column',
    alignSelf:'center',

    
  },
  bot:{
    borderWidth:3,
    borderRadius:20,
    backgroundColor:'gray',
    padding:10,
    // marginBottom:50,
    margin:10,
    left:10,
    paddingRight:20,
    borderColor:'gray',
    color:'black',
    borderStyle:'solid',
    flexDirection:'column',
    alignSelf:'center',
  }
})