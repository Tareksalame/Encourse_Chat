import { StyleSheet, Text, View } from 'react-native'
import {Camera} from 'expo-camera'
import { TouchableOpacity } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import * as MediaLibrary from'expo-media-library'
import { useState } from 'react'
import { useRef } from 'react'
import { useContext } from 'react'
import userContext from '../usersContext'
import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native'


const CameraPage = () => {
    const [hasCameraPrimission,setHasCameraPrimission] = useState(null)
    const cameraRef = useRef(null)
    const {setCon} = useContext(userContext)
    const {con} = useContext(userContext)
    let date = new Date();
    let nav = useNavigation()

    const premission = async()=>
    {
        MediaLibrary.requestPermissionsAsync()
        const cameraStatus= await Camera.requestCameraPermissionsAsync()
        setHasCameraPrimission(true)
    }
    useEffect(()=>
    {
        premission()
    },[])

    const takephoto = async()=>
    {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        if(cameraRef.current !== null)
        {
            const photo = await cameraRef.current.takePictureAsync()
            try
            {
                const asset = await MediaLibrary.createAssetAsync(photo.uri);
                console.log(asset);
                setCon([...con,{type: 'photo' , message: asset , time:hours + ':' + minutes}])
                nav.navigate('chatScreen')
                Alert.alert('ok','photo is added')
            }catch
            {
                Alert.alert('error','cant')
                nav.navigate('chatScreen')

            }
        }
    }
  return (
    <View style={styles.container}>
      <Camera style={{flex:0.5}} ref={cameraRef} />
      <TouchableOpacity onPress={takephoto}>
        <Text style={styles.picture}>
            take picture
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default CameraPage

const styles = StyleSheet.create({
    picture:
    {
        fontSize:20,
        marginTop:30,
        width: 200,
        height:30,
        backgroundColor : 'blue',
        textAlign:'center',
        alignSelf:'center',
        borderRadius:30,
    },
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
      },
})