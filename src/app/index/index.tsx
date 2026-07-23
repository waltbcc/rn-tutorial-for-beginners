import { View, Text, ActivityIndicator } from 'react-native'
import { Activity, useState } from 'react';

const logoImage = require('../../../assets/img.jpg');

export default function Home() {
  const [isModalVisible, setModalVisible]=useState(false);
  return (
    <View  style={{flex: 1, backgroundColor: 'plum', padding: 60}}>
      <Text>Hello</Text>
      <ActivityIndicator />
      <ActivityIndicator size="large" color="blue" />
      <ActivityIndicator size={300} color="white" animating />
    </View>
  )
}