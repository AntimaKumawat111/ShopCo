import AddBlackIcon from './icons/addBlackIcon';
import AddWhiteIcon from './icons/addWhiteIcon';
import MinusBlackIcon from './icons/minusBlackIcon';
import MinusWhiteIcon from './icons/minusWhiteIcon';
import SearchBlackIcon from './icons/searchBlackIcon';
import SearchWhiteIcon from './icons/searchWhiteIcon';
import UserProfileBlackIcon from './icons/userProfileBlackIcon';
import UserProfileWhiteIcon from './icons/userProfileWhiteIcon';
import ForwardBlackIcon from './icons/forwardBlackIcon';
import ForwardWhiteIcon from './icons/forwardWhiteIcon';
import BackBlackIcon from './icons/backBlackIcon';
import BackWhiteIcon from './icons/backWhiteIcon';
import CartBlackIcon from './icons/cartBlackIcon';
import CartWhiteIcon from './icons/cartWhiteIcon';
import CartBlankBlackIcon from './icons/cartBlankBlackIcon';
import CartBlankWhiteIcon from './icons/cartBlankWhiteIcon';
import DiscountBlackIcon from './icons/discountBlack';
import DiscountWhiteIcon from './icons/discountWhite';
import LocationWhiteIcon from './icons/locationWhiteIcon';
import LocationBlackIcon from './icons/locationBlackIcon';
import CreditCardBlackIcon from './icons/creditCardBlackIcon';
import CreditCartWhiteIcon from './icons/creditCardWhiteIcon';
import PayPalBlackIcon from './icons/paypalBlackIcon';
import PayPalWhiteIcon from './icons/paypalWhiteIcon';

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
  discount: {
    light: DiscountBlackIcon,
    dark: DiscountWhiteIcon,
  },
  location: {
    light: LocationWhiteIcon,
    dark: LocationBlackIcon,
  },
  creditCard: {
    light: CreditCardBlackIcon,
    dark: CreditCartWhiteIcon,
  },
  payPal: {
    light: PayPalBlackIcon,
    dark: PayPalWhiteIcon,
  },
  
} as const;

export type IconName = keyof typeof ICONS;
