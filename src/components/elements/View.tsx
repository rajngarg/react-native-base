import React from 'react';
import {View as RNView, StyleSheet} from 'react-native';
import useThemedColors from '../../hooks/useThemedColors';

const View = React.memo((props: any) => {
  const styles = useStyles();
  const style = {
    ...styles.defaultView,
    ...props.style,
  };

  return <RNView style={style}>{props.children}</RNView>;
});
export default View;
const useStyles = () => {
  let Colors = useThemedColors();
  return StyleSheet.create({
    defaultView: {
      backgroundColor: Colors.background,
      shadowOffset: {height: 1, width: 1},
      shadowColor: 'black',
      shadowOpacity: 0.5,
      elevation: 10,
    },
  });
};
