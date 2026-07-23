import { View, Text, Image, ImageBackground, ScrollView, Button } from 'react-native'

const logoImage = require('../../../assets/img.jpg');

export default function Home() {
  return (
    <View  style={{flex: 1, backgroundColor: 'plum', padding: 60}}>
      <Button 
      title="Avançar"
      color="red"
      onPress={() => (console.log('avançou'))}
      disabled />
    </View>
  )
}