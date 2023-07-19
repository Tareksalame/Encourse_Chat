import {StyleSheet, Text ,KeyboardAvoidingView } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Input from '../components/Input'
import userContext from '../usersContext';


const MainScreen = () => {
  const {setUser} = useContext(userContext)
  const {user} = useContext(userContext)

  let nav = useNavigation();
  const show = ()=>
  {
    if(user !== '')
    {
      nav.navigate('PreChat')
    }
  }

  return (
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Text style={styles.title}>EnCourse</Text>
        <Input show={show} user={user} setUser={setUser}/>
      </KeyboardAvoidingView>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    backgroundColor:'green',
    alignItems:"center",
    justifyContent:'start',
    borderWidth:4,
    borderColor:'green',
  },
  title:
  {
    color:'white',
    fontSize:30,
    paddingTop:65,
  },
  btn:{
    backgroundColor:'green',
    fontWeight:'bold',
    marginHorizontal:60,
    alignSelf:'flex-end',
    borderStyle:'solid',
    borderWidth:2,
    borderRadius:8,
    color:'white',
  },
  input:
  {
    backgroundColor:'white',
    color:'green',
    fontSize:20,
    marginTop:350,
    marginBottom:20,
    paddingLeft:15,
    width:200,
    height:40,
    borderWidth:3,
    borderRadius:10,
    borderColor:'green'
  }
})