import { View, Text, Image, ImageBackground, ScrollView } from 'react-native'

const logoImage = require('../../../assets/img.jpg');

export default function Home() {
  return (
    <ScrollView  style={{flex: 1, backgroundColor: 'plum'}}>
      <Image source={logoImage} />
        <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut voluptatum vel quod sapiente repellat porro tenetur perferendis ea libero reprehenderit, inventore neque quibusdam nemo quos minus molestias architecto distinctio voluptates.</Text>
     <Image source={logoImage} />
        <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut voluptatum vel quod sapiente repellat porro tenetur perferendis ea libero reprehenderit, inventore neque quibusdam nemo quos minus molestias architecto distinctio voluptates.</Text>
     <Image source={logoImage} />
        <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut voluptatum vel quod sapiente repellat porro tenetur perferendis ea libero reprehenderit, inventore neque quibusdam nemo quos minus molestias architecto distinctio voluptates.</Text>
    
    
    </ScrollView>
  )
}