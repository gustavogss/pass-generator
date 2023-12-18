import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import { styles } from './styles';
import { InputText } from '../InputText';
import generatePasswd from '../../services/passwdService';
import * as Clipboard from 'expo-clipboard';


export function Botao() {
  const [password, setPassword] = useState('');

  function handleCopiar(){
    Clipboard.setStringAsync(password)   
    alert('Senha copiada')
  }

  function handleGenerator(){   
    setPassword(generatePasswd())    
  }

  return (
    <>
    <InputText value={password}/>
    <View style={styles.container}>
        <TouchableOpacity onPress={handleGenerator}>
            <Text style={styles.title}>GERAR</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.container}>
        <TouchableOpacity onPress={handleCopiar}>
            <Text style={styles.title}>COPIAR</Text>            
        </TouchableOpacity>
    </View>    
    
 </>
  );
}