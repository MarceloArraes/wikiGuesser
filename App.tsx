
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import Wikipages from './src/screens/Wikipages';
import TodoNative from './src/screens/TodoNative';
import Checklist from './src/screens/Checklist';
import {ChecklistProvider} from "./src/context/ChecklistContext";

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
      <Stack.Navigator initialRouteName="Home" >{/*para todas as telas terem o mesmo titulo: screenOptions={{ title: 'Tela Inicial' }} */}

          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Tela Inicial' }}/>
          <Stack.Screen name="Wikipages" component={Wikipages} initialParams={{ name: 'no Params', age:0 }}/> 
          <Stack.Screen name="TodoList" component={TodoNative}/> 
          <Stack.Screen name="Checklist" component={Checklist}/> 

      </Stack.Navigator>

    </NavigationContainer>


  );
}
/* If you didn't specify any params when navigating to this screen, the initial params will be used. */