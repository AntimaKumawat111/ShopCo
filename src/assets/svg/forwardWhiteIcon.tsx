import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function ForwardWhiteIcon(props: any) {
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
          d="M23.25 90a1.5 1.5 0 01-1.061-2.56L64.629 45 22.189 2.561A1.5 1.5 0 1124.31.44l43.5 43.5a1.5 1.5 0 010 2.121l-43.5 43.5a1.491 1.491 0 01-1.06.439z"
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

export default ForwardWhiteIcon;
