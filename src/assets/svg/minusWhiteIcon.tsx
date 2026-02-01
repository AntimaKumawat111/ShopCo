import * as React from 'react';
import Svg, {G, Path, Rect} from 'react-native-svg';

function MinusWhiteIcon(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={256}
      height={256}
      viewBox="0 0 256 256"
      {...props}>
      <G
        transform="matrix(2.81 0 0 2.81 1.407 1.407)"
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
          d="M45 90C20.187 90 0 69.813 0 45S20.187 0 45 0s45 20.187 45 45-20.187 45-45 45zm0-82C24.598 8 8 24.598 8 45s16.598 37 37 37 37-16.598 37-37S65.402 8 45 8z"
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
        <Rect
          x={19.97}
          y={41}
          rx={0}
          ry={0}
          width={50.05}
          height={8}
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

export default MinusWhiteIcon;
