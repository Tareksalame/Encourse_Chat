import { Button, ScrollView, StyleSheet, Text, TextInput, View,KeyboardAvoidingView } from 'react-native'
import React, { useContext, useState } from 'react'
import userContext from '../usersContext'
import { useNavigation } from '@react-navigation/native'
import FooterInput from '../components/FooterInput'
import Message from '../components/Message'


const NewChat = () => {
  const {capsule} = useContext(userContext)
  const {capsuleArr} = useContext(userContext)
  const [customerChat, setCustomerChat] = useState(null)
  const {setCon} = useContext(userContext)
  const {con} = useContext(userContext)
  const {history} = useContext(userContext)
  const {setHistory} = useContext(userContext)


  
  let date = new Date();

  
  let nav = useNavigation()
  const send = ()=>
  {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if(customerChat !== null)
    {
      setCon([...con,{type: 'customer' , message: customerChat , time:hours + ':' + minutes}])
      setCustomerChat(null)

    }
  }
  const exit = ()=>
  {
    let month = date.getDate()
    let day = date.getDay()
    let year = date.getFullYear()
    setHistory([...history,{title: capsuleArr[capsule] , conversation: con , date:month +'/'+day+'/'+year }])
    setCon([])
    nav.navigate('EnCourse')
  }
  const conversation = ()=>
  {
    return conver = con.map((val)=>
    {
    if(val.type === 'customer')
    {
      return <Message icon={styles.customerLogo} style={styles.customer} type={val.type} time={val.time}  val={val.message}/>
    }
    else
    {
      return <Message icon={styles.botLogo} style={styles.bot} type={val.type} time={val.time}  val={val.message}/>
    }
    })
  }
  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.container}>
      <View style={styles.first}></View>
      <View style={styles.second}></View>
      <Text style={styles.question}>{capsuleArr[capsule]}</Text>
      <Text onPress={exit} style={styles.x}>x</Text>
      <View style={styles.inside}>
        <ScrollView style={styles.scrollChat}>
          {conversation()}
        </ScrollView>
        <FooterInput customerChat={customerChat} send={send} setCustomerChat={setCustomerChat}/>
      </View>
    </KeyboardAvoidingView>
  )
}


export default NewChat

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'green',
    alignItems:"center",
    justifyContent:'center',
    borderWidth:0,
    display:'flex',
    flexDirection:'column',
    borderColor:'green',
  },
  question:{
    color:'white',
    top:90,
    // left:90,
  },
  scrollChat:
  {
    flexDirection:'column',
    width:'100%',
    padding:20,
    marginBottom:95,
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
    top:150,
    backgroundColor:'green',
    position:'absolute'
  },
  second:{
    height:'70%',
    width:'100%',
    top:300,
    backgroundColor:'white',
    position:'absolute'

  },
  inside:{

    bottom:0,
    borderWidth:0,
    borderColor:'gray',
    borderRadius:10,
    marginTop:150,
    // paddingLeft:20,
    position:'relative',
    backgroundColor:'white',
    width:"90%",
    height:"81.5%",
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  customer:{
    borderWidth:3,
    borderRadius:20,
    backgroundColor:'green',
    padding:20,
    paddingRight:30,
    width:'70%',
    // marginBottom:50,
    margin:10,
    left:10,
    // paddingRight:20,
    borderColor:'green',
    color:'white',
    borderStyle:'solid',
    flexDirection:'row-reverse',
    alignSelf:'flex-start',
  

  },

  customerLogo:{
    display:'flex',
    flexDirection:'row',
    marginBottom:15,
  },
botLogo:{
    display:'flex',
    flexDirection:'row-reverse',
    marginBottom:15,

  },
  bot:{
    borderWidth:3,
    borderRadius:20,
    backgroundColor:'gray',
    padding:20,
    width:'70%',
    paddingLeft:20,
    // marginBottom:50,
    margin:10,
    left:10,
    paddingRight:20,
    borderColor:'gray',
    color:'black',
    borderStyle:'solid',

    flexDirection:'row-reverse',
    alignSelf:'flex-end',
  }

})