import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function AddWhiteIcon(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={256}
      height={256}
      viewBox="0 0 256 256"
      {...props}>
      <G
        stroke="none"
        strokeWidth={0}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit={10}
        fill="none"
        fillRule="nonzero"
        opacity={1}>
        <Path
          d="M45 69.478a3 3 0 01-3-3V23.523a3 3 0 116 0v42.955a3 3 0 01-3 3z"
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill="#fff"
          fillRule="nonzero"
          opacity={1}
        />
        <Path
          d="M66.478 48H23.523a3 3 0 110-6h42.955a3 3 0 110 6z"
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill="#fff"
          fillRule="nonzero"
          opacity={1}
        />
        <Path
          d="M45 90C20.187 90 0 69.813 0 45S20.187 0 45 0s45 20.187 45 45-20.187 45-45 45zm0-84C23.495 6 6 23.495 6 45s17.495 39 39 39 39-17.495 39-39S66.505 6 45 6z"
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill="#fff"
          fillRule="nonzero"
          opacity={1}
        />
      </G>
    </Svg>
  );
}

export default AddWhiteIcon;
