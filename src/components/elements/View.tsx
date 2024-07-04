import React from 'react';
import {View as RNView, StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';

const View = React.memo((props: any) => {
  const style = {
    ...styles.defaultView,
    ...props.style,
  };

  return <RNView style={style}>{props.children}</RNView>;
});

export default View;

const styles = StyleSheet.create({
  defaultView: {
    backgroundColor: COLORS.background,
    shadowOffset: {height: 1, width: 1},
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 10,
  },
});
