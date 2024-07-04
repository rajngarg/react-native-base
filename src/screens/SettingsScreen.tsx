import Header from 'components/Header';
import {View} from 'components/elements';
import React from 'react';
import {IMAGES} from 'utils/constants';

export default function SettingsScreen() {
  return (
    <View style={{flex: 1}}>
      <Header title={'Settings Screen'} iconRight={IMAGES.header.options} />
    </View>
  );
}
