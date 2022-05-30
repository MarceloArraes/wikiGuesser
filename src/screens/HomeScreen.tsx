import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

const HomeScreen = ({navigation}: any ) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.tsx to start working on your app!</Text>
      <Button
        title="Go to WIKIPAGES"
        onPress={() => navigation.navigate('Wikipages',{name: 'Home', age: 20})}
      />
      <Button
        title="Go to TodoList"
        onPress={() => navigation.navigate('TodoList')}
      />
      <Button
        title="Go to Checklist"
        onPress={() => navigation.navigate('Checklist')}
      />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
}});


export default HomeScreen