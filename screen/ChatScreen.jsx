import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import userContext from '../usersContext'
import { useContext } from 'react'
import Message from '../components/Message'
import { useNavigation } from '@react-navigation/native'

const ChatScreen = () => {
  const {history} = useContext(userContext)
  const {historyConversation} = useContext(userContext)

  let nav = useNavigation()
  const conversation = ()=>
  {
    return chat = history[historyConversation].conversation.map((val)=>
    {
    if(val.type === 'customer')
    {
      return <Message icon={styles.customerLogo} time={val.time} style={styles.customer} type={val.type}  val={val.message}/>
    }
    else
    {
      return <Message icon={styles.botLogo} time={val.time} style={styles.bot} type={val.type}  val={val.message}/>
    }
    })
  }

  return (
    <View style={styles.container}>
        <Text onPress={()=>{nav.navigate('history')}} style={styles.x}>X</Text>
        <Text style={styles.title}>{history[historyConversation].title}</Text>
    <ScrollView style={styles.scrollChat}>
      {conversation()}
    </ScrollView>
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
    scrollChat:
    {
      flexDirection:'column',
      width:'90%',
      marginTop:50,
      marginBottom:50,
      padding:20,
      marginBottom:100,
      borderWidth:1
      },
      x:{
        position:'absolute',
        top:70,
        fontSize:30,
        color:'green',
        left:30
      },
      title:{
        fontSize:20,
        color:'green',

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
      container: {
        flex: 1,
        backgroundColor:'white',
        alignItems:"center",
        justifyContent:'center',
        borderWidth:0,
        display:'flex',
        paddingTop:100,
        flexDirection:'column',
        borderColor:'white',
      },
    customer:{
        borderWidth:3,
        borderRadius:20,
        backgroundColor:'green',
        padding:20,
        paddingLeft:30,
        paddingRight:30,

        // marginBottom:50,
        margin:10,
        left:10,
        // paddingRight:20,
        borderColor:'green',
        color:'white',
        borderStyle:'solid',
        flexDirection:'row-reverse',
        alignSelf:'flex-start',
        width:'70%',
    
        
      },
      bot:{
        borderWidth:3,
        borderRadius:20,
        backgroundColor:'gray',
        padding:20,
        paddingLeft:20,
        paddingRight:30,
        width:'70%',
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