import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'

const Photo = (props) => {
  return (
    <View style={props.icon}>
        <Text style={styles.icon}>{props.type}</Text>
        <View style={props.style}>
            <Text style={styles.date}>{props.time}</Text>
            <Image 
            source={{
                uri: props.val.uri,
                width: 100,
                height: 100}}
            style={{paddingLeft:10}}/>
        </View>
    </View>
  )
}

export default Photo

const styles = StyleSheet.create({
    date:{
        paddingLeft:10,
        fontSize:10,
        color:'white'
    },
})