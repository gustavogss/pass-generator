import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import {styles} from './styles'
import { Logo } from '../../components/Logo';
import { InputText } from '../../components/InputText';
import {Botao} from '../../components/Botao';

export function Home() {
   
  return (
    <View style={styles.container}>    
      <Text style={styles.title}> PASS GENERATOR</Text>
      <Logo />  
      <Botao />
      <StatusBar style='light' />
    </View>
  )
}