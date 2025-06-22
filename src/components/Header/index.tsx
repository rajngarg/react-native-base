import { Text, View } from '@elements';
import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { styles } from './styles';
import { ImageButton } from '@components';
import { IMAGES } from '@constants';

type IHeader = {
  title: string;
  canGoBack?: boolean;
  iconLeft?: ImageSourcePropType;
  iconRight?: ImageSourcePropType;
};

const Header = React.memo((props: IHeader) => {
  let { title, canGoBack, iconLeft, iconRight } = props;
  if (canGoBack) {
    iconLeft = IMAGES.header.back;
  }
  return (
    <View style={styles.header}>
      {iconLeft && <ImageButton image={iconLeft} />}
      <Text style={[styles.title, !iconLeft && styles.spaceStart]}>{title}</Text>
      {iconRight && <ImageButton image={iconRight} />}
    </View>
  );
});

export default Header;
