import { View, Text, StyleSheet } from 'react-native'

export default function Home() {
  return (
    <View  style={styles.container}>
      <Text style={styles.title}>Hello, World</Text>
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
  }

})