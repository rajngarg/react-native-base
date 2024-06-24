import {Appearance} from 'react-native';
import {Colors} from '../constants/Colors';

const useThemedColors = () => {
  if (Appearance.getColorScheme() === 'light') {
    return Colors.light;
  } else {
    return Colors.dark;
  }
};
export default useThemedColors;
