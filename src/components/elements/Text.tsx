import React from 'react';
import {Text as RNText, StyleSheet} from 'react-native';
import useThemedColors from '../../hooks/useThemedColors';
import {scale} from '../../utils/Responsive';

const Text = React.memo((props: any) => {
  const styles = useStyles();
  const style = {
    ...styles.defaultText,
    ...props.style,
  };
  return <RNText style={style}>{props.children}</RNText>;
});

export default Text;
const useStyles = () => {
  let Colors = useThemedColors();
  return StyleSheet.create({
    defaultText: {
      color: Colors.primaryText,
      fontSize: scale(16),
    },
  });
};
