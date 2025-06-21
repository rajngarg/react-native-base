import React from 'react';
import {Text as RNText, StyleSheet, TextProps} from 'react-native';
import {scale} from 'utils/helpers/Responsive';
import {COLORS} from 'utils/constants';

const Text = React.memo((props: TextProps) => {
  const {style} = props;
  const customStyle = {
    ...styles.defaultText,
    style,
  };
  return <RNText style={customStyle}>{props.children}</RNText>;
});

export default Text;

const styles = StyleSheet.create({
  defaultText: {
    color: COLORS.primaryText,
    fontSize: scale(14),
  },
});
