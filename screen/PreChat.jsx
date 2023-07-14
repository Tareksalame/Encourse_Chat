import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import userContext from '../usersContext'
import { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'

const PreChat = () => {
  const {user} = useContext(userContext)
  const {capsuleArr} = useContext(userContext)
  const {setCapsule} = useContext(userContext)
  const {setCon} = useContext(userContext)
  const {con} = useContext(userContext)

  let nav = useNavigation();

  const exit = ()=>
  {
    setCon([]);
    nav.navigate('EnCourse');
  }
  let date = new Date();

  const newChat = (idx)=>
  {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    setCapsule(idx)
    setCon([...con,{type:'Bot' , message:'Hello ' + user + ' How Can I Help U?', time:hours + ':' + minutes}])
    nav.navigate('newChat')
  }

  return (
    <View style={styles.container}>
      <View style={styles.first}></View>
      <View style={styles.second}></View>
      <Text onPress={exit} style={styles.x}>x</Text>
      <View style={styles.inside}>
        <Text>Hello,{user}! What would you like to tell us?</Text>
        {capsuleArr.map((val,idx)=>
        {
        return <View style={styles.capsule}><Text onPress={()=>{newChat(idx)}} style={{color:'white'}}>{val} </Text></View>
        })}
      </View>
    </View>
  )
}


export default PreChat

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'green',
    alignItems:"center",
    justifyContent:'start',
    borderWidth:0,
    borderColor:'green',
  },
  x:{
    alignSelf:'center',
    position:'absolute',
    top:70, 
    left:20, 
    fontSize:30,
    color:'white'
  },
  first:{
    height:'30%',
    width:'100%',
    backgroundColor:'green'
  },
  second:{
    height:'70%',
    width:'100%',
    backgroundColor:'white'
  },
  capsule:{
    borderWidth:3,
    borderRadius:20,
    backgroundColor:'green',
    marginTop:20,
    padding:10,
    paddingRight:20,
    borderColor:'green',
    color:'white',
    borderStyle:'solid'
  },
  inside:{
    bottom:0,
    borderWidth:0,
    borderColor:'gray',
    borderRadius:10,
    paddingTop:40,
    paddingLeft:20,
    position:'absolute',
    backgroundColor:'white',
    width:"90%",
    height:"81.5%",
    display:'flex',
    flexDirection:'column',
    justifyContent:'start',
    alignItems:'start',
    // marginBottom:50
  },
  title:
  {
    color:'white',
    fontSize:30,
  },
})