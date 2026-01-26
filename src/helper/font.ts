import {PixelRatio} from 'react-native';

export const scaleFont = (size: number) => {
return size * PixelRatio.getFontScale();
};

export const Font_Size_9 = scaleFont(9)
export const Font_Size_10 = scaleFont(10)
export const Font_Size_11 = scaleFont(11)
export const Font_Size_12 = scaleFont(12)
export const Font_Size_13 = scaleFont(13)
export const Font_Size_14 = scaleFont(14)
export const Font_Size_16 = scaleFont(16)
export const Font_Size_18 = scaleFont(18)
export const Font_Size_20 = scaleFont(20)
export const Font_Size_22 = scaleFont(22)
export const Font_Size_24 = scaleFont(24)
export const Font_Size_26 = scaleFont(26)
export const Font_Size_30 = scaleFont(30)
export const Font_Size_32 = scaleFont(32)

// LINE HEIGHT
export const LINE_HEIGHT_40 = scaleFont(40);
export const LINE_HEIGHT_30 = scaleFont(30);
export const LINE_HEIGHT_33 = scaleFont(33);
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_18 = scaleFont(18);
export const LINE_HEIGHT_16 = scaleFont(16);
export const LINE_HEIGHT_15 = scaleFont(15);

