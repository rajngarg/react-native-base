import { Image } from '@elements';
import React from 'react';
import { ImageSourcePropType, Pressable } from 'react-native';
import { COLORS } from '@constants';
import { styles } from './styles';

type IImageButton = {
  readonly image: ImageSourcePropType;
  onPress?: () => void;
};

const ImageButton = React.memo((props: IImageButton) => {
  const { image, onPress } = props;
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={image} style={styles.image} tintColor={COLORS.icon} />
    </Pressable>
  );
});

export default ImageButton;
