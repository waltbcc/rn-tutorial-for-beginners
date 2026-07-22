import { View, Text, Image, ImageBackground } from 'react-native'

const logoImag = require('../../../assets/img.jpg');

export default function Home() {
  return (
    <View style={{flex: 1, backgroundColor: 'plum', padding: 60}}>
      <ImageBackground source={logoImag} style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Texto Imagem</Text>
      </ImageBackground>
    </View>
  )
}