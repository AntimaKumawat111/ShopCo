import AddBlackIcon from './addBlackIcon';
import AddWhiteIcon from './addWhiteIcon';
import BackBlackIcon from './backBlackIcon';
import BackWhiteIcon from './backWhiteIcon';
import CartBlackIcon from './cartBlackIcon';
import CartWhiteIcon from './cartWhiteIcon';
import CartBlankBlackIcon from './cartBlankBlackIcon';
import CartBlankWhiteIcon from './cartBlankWhiteIcon';
import ForwardBlackIcon from './forwardBlackIcon';
import ForwardWhiteIcon from './forwardWhiteIcon';
import MinusBlackIcon from './minusBlackIcon';
import MinusWhiteIcon from './minusWhiteIcon';
import SearchBlackIcon from './searchBlackIcon';
import SearchWhiteIcon from './searchWhiteIcon';
import UserProfileBlackIcon from './userProfileBlackIcon';
import UserProfileWhiteIcon from './userProfileWhiteIcon';

export const ICONS = {
  add: {
    light: AddBlackIcon,
    dark: AddWhiteIcon,
  },

  minus: {
    light: MinusBlackIcon,
    dark: MinusWhiteIcon,
  },

  search: {
    light: SearchBlackIcon,
    dark: SearchWhiteIcon,
  },

  userProfile: {
    light: UserProfileBlackIcon,
    dark: UserProfileWhiteIcon,
  },

  forward: {
    light: ForwardBlackIcon,
    dark: ForwardWhiteIcon,
  },

  back: {
    light: BackBlackIcon,
    dark: BackWhiteIcon,
  },

  cart: {
    light: CartBlackIcon,
    dark: CartWhiteIcon,
  },

  cartBlank: {
    light: CartBlankBlackIcon,
    dark: CartBlankWhiteIcon,
  },
} as const;

export type IconName = keyof typeof ICONS;
