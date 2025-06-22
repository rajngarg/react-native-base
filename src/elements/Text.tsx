import React from 'react';
import { Text as RNText, StyleSheet, TextProps } from 'react-native';
import { scale } from '@utils/Responsive';
import { COLORS } from '@constants';

const Text = React.memo((props: TextProps) => {
  const { style } = props;
  return <RNText style={[styles.defaultText, style]}>{props.children}</RNText>;
});

export default Text;

const styles = StyleSheet.create({
  defaultText: {
    color: COLORS.primaryText,
    fontSize: scale(14),
  },
});
