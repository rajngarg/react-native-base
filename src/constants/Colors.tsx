/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 */

import {Appearance} from 'react-native';

const tintColorLight = '#000';
const tintColorDark = '#fff';

let colors = {
  light: {
    primaryText: 'black',
    secondaryText: 'white',
    background: '#fff',
    tint: tintColorLight,
    header: '#fff',
    icon: '#000',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    primaryText: 'white',
    secondaryText: 'black',
    background: '#151718',
    tint: tintColorDark,
    header: '#151718',
    icon: '#fff',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

let COLORS = {...colors.light};

if (Appearance.getColorScheme() === 'dark') {
  COLORS = {...colors.dark};
}

export default COLORS;
