import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Update this based on your preferred base size (modern middle-ground)
const guidelineBaseWidth = 390;
const guidelineBaseHeight = 844;

const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;

// New: Uses both width and height for more accurate scaling
const scale = (size: number, factor = 0.5) => {
  const hs = horizontalScale(size);
  const vs = verticalScale(size);
  const averageScale = (hs + vs) / 2;
  return size + (averageScale - size) * factor;
};

export { scale };