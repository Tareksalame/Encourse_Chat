import { StyleSheet, Text, View,Image, Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import {Camera} from 'expo-camera'
import * as MediaLibrary from'expo-media-library'
import { useNavigation } from '@react-navigation/native'

const Attach = () => {
    

    let nav = useNavigation()


  return (
    <View style={{display:'flex',flexDirection:'row'}}>
      <Text onPress={()=>{Alert.alert('hello','hello')}}>
        <Image 
        style={{width:30,height:30}}
        source={require('../src/happy-face.png')}/>
        </Text>
        <Text onPress={()=>{nav.navigate('camera')}}>
        <Image 
        style={{width:30,height:30}}
        source={require('../src/attachment.png')}/>
        </Text>
    </View>
  )
}

export default Attach

const styles = StyleSheet.create({})