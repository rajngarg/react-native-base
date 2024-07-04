import React from 'react';
import Header from 'components/Header';
import {View} from 'components/elements';

export default function HomeScreen() {
  return (
    <View style={{flex: 1}}>
      <Header title={'Home Screen'} />
    </View>
  );
}
