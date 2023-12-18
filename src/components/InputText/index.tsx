import React from 'react';
import { TextInput} from 'react-native';

import { styles } from './styles';

interface InputProps{
    value: string,
}

export function InputText({value}:InputProps) {
  return (    
    <TextInput 
    placeholder='Nenhuma senha foi gerada'
    value={value}  
    style={styles.inputText}/>   
  );
}