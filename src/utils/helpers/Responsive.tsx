'use strict';

import {PixelRatio} from 'react-native';

const scale = (size: number) => {
  let pixelRatio = PixelRatio.get();
  if (pixelRatio > 2) {
    return size * (pixelRatio / 2);
  } else {
    return size;
  }
};

export {scale};
