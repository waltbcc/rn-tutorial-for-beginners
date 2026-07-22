import { View, Text, Image } from 'react-native'

const logoImag = require('../../../assets/img.jpg');

export default function Home() {
  return (
    <View style={{flex: 1, backgroundColor: 'plum', padding: 60}}>
      <Image source={logoImag} style={{width: 300, height: 300}} />
      <Image source={{uri: 'https://picsum.photos/300'}} style={{width: 300, height: 300}} />
    </View>
  )
}