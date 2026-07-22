import { View, Text } from 'react-native'

export default function Home() {
  return (
    <View style={{flex: 1, backgroundColor: 'plum'}}>
      <View style={{width: 200, height: 200, backgroundColor: 'lightgreen'}}></View>
      <View style={{width: 200, height: 200, backgroundColor: 'lightblue'}}></View>
    </View>
  )
}