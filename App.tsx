import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//This site: https://en.wikipedia.org/wiki/Special:ApiSandbox
//action=query = revisions, pageassesments, pageviews
//proprevisions = content
//generator = random,  grnnamespace = (article), grnlimit=10.
//format json.
//https://en.wikipedia.org/w/api.php?action=query&format=json&prop=revisions%7Cpageassessments%7Cpageviews&indexpageids=1&generator=random&formatversion=2&rvprop=content&grnnamespace=0&grnfilterredir=nonredirects&grnlimit=10


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
