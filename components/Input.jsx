import { Button, StyleSheet, TextInput, View,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Input(props) {

    let nav = useNavigation()

  return (
    <View>
      <TextInput 
      onChangeText={props.setUser} 
      style={styles.input} 
      placeholder='Username' 
      keyboardType='text'
      value={props.user}/>
      <Button onPress={props.show} color={'green'} style={styles.btn} title='Start New Chat'/>
      <Button onPress={()=>{nav.navigate('history')}} color={'green'} style={styles.btn} title='History'/>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
              flex: 1,
              backgroundColor:'green',
              alignItems:"center",
              justifyContent:'start',
              borderWidth:4,
              borderColor:'green',
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
})


