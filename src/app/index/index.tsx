import { View, Text, Image, ImageBackground, ScrollView, Pressable, Button, Modal } from 'react-native'
import { useState } from 'react';

const logoImage = require('../../../assets/img.jpg');

export default function Home() {
  const [isModalVisible, setModalVisible]=useState(false);
  return (
    <View  style={{flex: 1, backgroundColor: 'plum', padding: 60}}>
      <Button 
      title="Avançar"
      color="red"
      onPress={() => (setModalVisible(true))}
      />
      <Modal 
        visible={isModalVisible}
        animationType='slide'
        onRequestClose={()=>(setModalVisible(false))}
        presentationStyle='overFullScreen'
        style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue'}}>
          <View style={{backgroundColor: 'white', padding: 20, borderRadius: 8, width: 300, height: 300}}>
            <Text>Modal aberto</Text>
            <Button title='fechar modal' onPress={()=> setModalVisible(false)} />
          </View>
      </Modal>
    </View>
  )
}