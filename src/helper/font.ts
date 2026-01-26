import {PixelRatio} from 'react-native';

export const scaleFont = (size: number) => {
  return size * PixelRatio.getFontScale();
};

export const makeFont = (fontFamily: string, fontSize: number) => ({
  fontFamily,
  fontSize,
});

export const Font_Size_9 = scaleFont(9);
export const Font_Size_10 = scaleFont(10);
export const Font_Size_11 = scaleFont(11);
export const Font_Size_12 = scaleFont(12);
export const Font_Size_13 = scaleFont(13);
export const Font_Size_14 = scaleFont(14);
export const Font_Size_16 = scaleFont(16);
export const Font_Size_18 = scaleFont(18);
export const Font_Size_20 = scaleFont(20);
export const Font_Size_22 = scaleFont(22);
export const Font_Size_24 = scaleFont(24);
export const Font_Size_26 = scaleFont(26);
export const Font_Size_30 = scaleFont(30);
export const Font_Size_32 = scaleFont(32);
export const Font_Size_36 = scaleFont(36);
export const Font_Size_45 = scaleFont(45);

// LINE HEIGHT
export const LINE_HEIGHT_50 = scaleFont(50);
export const LINE_HEIGHT_40 = scaleFont(40);
export const LINE_HEIGHT_30 = scaleFont(30);
export const LINE_HEIGHT_33 = scaleFont(33);
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_18 = scaleFont(18);
export const LINE_HEIGHT_16 = scaleFont(16);
export const LINE_HEIGHT_15 = scaleFont(15);

// FONT FAMILY
export const FONT_FAMILY_EXTRA_BOLD = 'Nunito-ExtraBold';
export const FONT_FAMILY_BOLD = 'Nunito-Bold';
export const FONT_FAMILY_LIGHT = 'Nunito-Light';
export const FONT_FAMILY_MEDIUM = 'Nunito-Medium';
export const FONT_FAMILY_REGULAR = 'Nunito-Regular';
export const FONT_FAMILY_SEMI_BOLD = 'Nunito-SemiBold';

// FONT WEIGHT
export const FONT_WEIGHT_REGULAR = '400';
export const FONT_WEIGHT_MEDIUM = '500';
export const FONT_WEIGHT_SEMI_BOLD = '600';
export const FONT_WEIGHT_BOLD = '700';

// FONT STYLE
export const FONT_REGULAR = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_BOLD = {
  fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FONT_WEIGHT_BOLD,
};
