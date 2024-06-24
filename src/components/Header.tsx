import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {scale} from '../utils/Responsive';
import {Text, View} from './elements';
import useThemedColors from '../hooks/useThemedColors';

type IHeader = {
  readonly title: string;
};

const Header = React.memo((props: IHeader) => {
  const styles = useStyles();
  const {title} = props;
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
});

export default Header;

const useStyles = () => {
  let Colors = useThemedColors();
  return StyleSheet.create({
    header: {
      padding: scale(20),
      backgroundColor: Colors.header,
    },
    title: {
      color: Colors.secondaryText,
      fontSize: scale(20),
    },
  });
};
