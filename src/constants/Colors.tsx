/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#000';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    primaryText: 'black',
    secondaryText: 'white',
    background: '#fff',
    tint: tintColorLight,
    header: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    primaryText: 'white',
    secondaryText: 'black',
    background: '#151718',
    tint: tintColorDark,
    header: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
