import { View, Text, StyleSheet } from 'react-native'

export default function Home() {
  return (
    <View  style={styles.container}>
      <Text style={styles.title}>Hello, World</Text>
      <View style={[styles.box, styles.lightBlueBg]}>
        <Text>Lightblue box</Text>
      </View>
      <View style={[styles.box, styles.lightGreenBg]}>
        <Text>Light Box</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    padding: 60
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  box: {
    width: 100,
    height: 100,
    padding: 10,
  },
  lightBlueBg: {
    backgroundColor: 'lightblue',
  },
  lightGreenBg: {
    backgroundColor: 'lightgreen',
  }
})