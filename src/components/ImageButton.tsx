import React from 'react';
import { ImageSourcePropType, StyleSheet, View } from 'react-native';
import { scale } from 'utils/helpers/Responsive';
import Image from './elements/Image';

type IImageButton = {
  readonly image: ImageSourcePropType;
};

const ImageButton = React.memo((props: IImageButton) => {
  const { image } = props;
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
    </View>
  );
});

export default ImageButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: scale(40),
    height: scale(40),
  },
  image: {
    resizeMode: 'contain',
    width: scale(20),
    height: scale(20),
  },
});
