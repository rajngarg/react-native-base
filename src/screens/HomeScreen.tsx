import React, {useState} from 'react';
import {View} from 'react-native';
import Header from '../components/Header';

export default function HomeScreen() {
  return (
    <View style={{flex: 1}}>
      <Header title={'Home Screen'} />
    </View>
  );
}
