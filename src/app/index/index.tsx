import { View, Button, Alert } from 'react-native'
import { Activity, useState } from 'react';

const logoImage = require('../../../assets/img.jpg');

export default function Home() {
  const [isModalVisible, setModalVisible]=useState(false);
  return (
    <View  style={{flex: 1, backgroundColor: 'plum', padding: 60}}>
      <Button title="Alert" onPress={() => Alert.alert('Olá')} />
      <Button title="Alert 223" onPress={() => Alert.alert('Pagamento inválido', 'seu cartão não foi reconhecido')} />
      <Button title="Alert 3" onPress={() => Alert.alert('Pagamento não efetuado', 'Erro na cobrança, favor contate a emissora do cartão ou selecionando outro meio de pagamento, sugerimos o pix.',[
        {
          text: 'cancelar',
          onPress: () => (console.log('cancelado'))
        },
        {
          text: 'Pagar com pix',
          onPress: () => (console.log('prefere pagar com pix'))
        }
      ])} />
    </View>
  )
}