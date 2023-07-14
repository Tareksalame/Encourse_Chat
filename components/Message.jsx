import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Message = (props) => {
    

    let date = new Date();

  return (
    <View style={props.icon}>
            <Text style={styles.icon}>{props.type}</Text>
    <View style={props.style}>
            <Text style={styles.date}>{props.time}</Text>
            <Text style={{color:'white',paddingLeft:10}}>{props.val} </Text>
    </View>
    </View>
  )
}

export default Message

const styles = StyleSheet.create({
    date:{
        paddingLeft:10,
        fontSize:10,
        color:'white'
    },
    customer:{
        borderWidth:3,
        borderRadius:20,
        backgroundColor:'green',
        padding:10,
        // marginBottom:50,
        margin:10,
        left:10,
        paddingRight:20,
        borderColor:'green',
        color:'white',
        borderStyle:'solid',
        flexDirection:'column',
        alignSelf:'flex-start',
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
        alignSelf:'flex-end',
      },
      icon:{
        alignSelf:'baseline',
        // paddingTop:50,
      }
})