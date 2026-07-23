import { View, Text, Image, ImageBackground, ScrollView, Pressable, Button, Modal, StatusBar } from 'react-native'
import { useState } from 'react';

const logoImage = require('../../../assets/img.jpg');

export default function Home() {
  const [isModalVisible, setModalVisible]=useState(false);
  return (
    <View  style={{flex: 1, backgroundColor: 'plum', padding: 60}}>
      <StatusBar backgroundColor="red" barStyle="light-content"  />
    </View>
  )
}