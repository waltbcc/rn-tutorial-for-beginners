import { View, Text, Image, ImageBackground, ScrollView, Pressable, Button } from 'react-native'

const logoImage = require('../../../assets/img.jpg');

export default function Home() {
  return (
    <View  style={{flex: 1, backgroundColor: 'plum', padding: 60}}>
      <Button 
      title="Avançar"
      color="red"
      onPress={() => (console.log('avançou'))}
      disabled />
      <Pressable onPress={()=> (console.log('clicou')) }>
        <Image source={logoImage} style={{width: 300, height: 300, borderRadius: 100}} />
      </Pressable>
      <Pressable>
        <Text style={{ fontSize: 20, fontWeight: '500', color: 'white', paddingVertical: 20 }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum animi ad obcaecati quas? Tempora atque impedit cumque libero quia quas pariatur ab laboriosam. Corporis quibusdam unde dolor ad accusantium mollitia?</Text>
      </Pressable>
    </View>
  )
}