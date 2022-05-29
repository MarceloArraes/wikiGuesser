
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';

//This site: https://en.wikipedia.org/wiki/Special:ApiSandbox
//action=query = revisions, pageassesments, pageviews
//proprevisions = content
//generator = random,  grnnamespace = (article), grnlimit=10.
//format json.
//https://en.wikipedia.org/w/api.php?action=query&format=json&prop=revisions%7Cpageassessments%7Cpageviews&indexpageids=1&generator=random&formatversion=2&rvprop=content%7Ccontentmodel%7Coresscores%7Croles&grnnamespace=0&grnfilterredir=nonredirects&grnlimit=10

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
