import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import {styles} from './styles'
import { Logo } from '../../components/Logo';

export function Home() {
  return (
    <View style={styles.container}>    
      <Text style={styles.title}> PASS GENERATOR</Text>
      <Logo />
      <StatusBar style='auto' />
    </View>
  )
}