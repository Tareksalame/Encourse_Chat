import { StyleSheet, Text, View } from 'react-native'
import userContext from '../usersContext'
import { useContext } from 'react'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HistoryCapsule = (props) => {

    let nav = useNavigation()
    const {historyConversation} = useContext(userContext)
    const {setHistoryConversation} = useContext(userContext)
    const setConversation = (idx)=>
    {   
        setHistoryConversation(idx);
        nav.navigate('chatScreen');
    }
  return (
    <View style={styles.container}>
        <Text onPress={()=>{setConversation(props.idx)}} style={{color:'white'}}>{props.val.title}</Text>
        <Text onPress={()=>{setConversation(props.idx)}} style={styles.date}>{props.val.date}</Text>
    </View>
  )
}

export default HistoryCapsule

const styles = StyleSheet.create({
    container: {
        backgroundColor:'green',
        alignItems:"center",
        justifyContent:'space-around',
        borderWidth:1,
        borderRadius:50,
        display:'flex',
        flexDirection:'row',
        borderColor:'green',
        marginTop:20,
        marginBottom:20,
        padding:20
      },
      date:
      {
        fontSize:10,
        color:'white',
      }
})