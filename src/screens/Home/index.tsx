import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import styles from './styles'

export function Home() {
  return (
    <View style={styles.container}>
      <Text>PASS GENERATOR</Text>
      <StatusBar style='auto' />
    </View>
  )
}