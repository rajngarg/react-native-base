import { Header } from '@components';
import React from 'react';
import { IMAGES } from '@constants';
import { styles } from './styles';
import { View } from '../../elements';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Header title={'Settings Screen'} iconRight={IMAGES.header.options} />
    </View>
  );
}
