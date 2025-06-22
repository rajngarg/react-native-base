import React from 'react';
import { ImageProps, Image as RNImage, StyleSheet } from 'react-native';
import { COLORS } from '@constants';

interface IImage extends ImageProps {
  tintable?: boolean;
}

const Image = React.memo((props: IImage) => {
  const { tintable, style } = props;

  let customStyle = {};
  if (tintable) {
    customStyle = { ...styles.default };
  }

  customStyle = { ...customStyle, style };
  return <RNImage style={customStyle} {...props} />;
});

export default Image;

const styles = StyleSheet.create({
  default: {
    tintColor: COLORS.icon,
  },
});
