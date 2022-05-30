import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Wikipages = ({route, navigation}: any ) => {
  const { name, age } = route.params;

  if(name ==='Wikipages'){
    navigation.setParams({name: 'WE ARE ON THE SAME PAGE', age: 11});
  }

  return (
    <View>
      <Text>Wikipages {name} {age}</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.push('Wikipages', {name:'Wikipages', age:10})}/*Goes to top of the stack: onPress={() => navigation.popToTop()} */
      />{/* you can use the passed userId to grab the user from your global store. This eliminates a host of issues such as outdated data, or problematic URLs. */}
    </View>
  )
}

export default Wikipages

const styles = StyleSheet.create({})