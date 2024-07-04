import React from 'react';
import {ImageSourcePropType, StyleSheet} from 'react-native';
import {scale} from 'utils/helpers/Responsive';
import ImageButton from './ImageButton';
import {Text, View} from './elements';
import {COLORS, IMAGES} from 'utils/constants';

type IHeader = {
  title: string;
  iconLeft?: ImageSourcePropType;
  iconRight?: ImageSourcePropType;
};

const Header = React.memo((props: IHeader) => {
  const {title, iconLeft = IMAGES.header.back, iconRight} = props;

  return (
    <View style={styles.header}>
      <ImageButton image={iconLeft} />
      <Text style={styles.title}>{title}</Text>
      {iconRight && <ImageButton image={iconRight} />}
    </View>
  );
});

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.header,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backImage: {resizeMode: 'contain'},
  title: {
    color: COLORS.primaryText,
    flex: 1,
    fontSize: scale(16),
  },
});
