import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './screen/MainScreen'
import PreChat from './screen/PreChat';
import NewChat from './screen/NewChat';
import History from './screen/History';
import {UsersProvider} from './usersContext'
import ChatScreen from './screen/ChatScreen';

export default function App() {

  const Stack = createNativeStackNavigator()

  return (
    <View style={styles.container}>  
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name={"EnCourse"} component={MainScreen}/>
          <Stack.Screen name={"PreChat"} component={PreChat}/>
          <Stack.Screen name={"newChat"} component={NewChat}/>
          <Stack.Screen name={"history"} component={History}/>
          <Stack.Screen name={"chatScreen"} component={ChatScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
      </UsersProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
