import { StyleSheet, Text, View,Button,TextInput,Image } from 'react-native'
import React, { useState } from 'react'
import Attach from './Attach'

const FooterInput = (props) => {

  const[show,setShow] = useState(false)
  const showIcons = ()=>
  {
    if(show == false)
    {
      return <Text onPress={()=>{setShow(!show)}} style={{width:'100%'}}>show</Text>
    }
    else
    {
      return <Attach/>
    }
  }
  return (
    <View style={styles.footer}>
          <Text>
            {showIcons()}
          </Text>
          <TextInput 
          onChangeText={props.setCustomerChat} 
          value={props.customerChat}
          style={styles.chat} 
          placeholder='type here' 
          keyboardType='text'/>
          <Button onPress={props.send} title='Send'/>
    </View>
  )
}

export default FooterInput

const styles = StyleSheet.create({
    footer:
    {
      bottom:40,
      position:'absolute',
      width:'100%',
      height:60,
      justifyContent:'space-around',
      display:'flex',
      alignItems:'center',
      flexDirection:'row',
    },
    chat : {
        borderColor:'white',
        color:'green',
        borderRadius:10,
        fontWeight:'bold',
        width:'60%',
        height:50,
        paddingLeft:20,
        backgroundColor:'#f8f8ff',
      },
})