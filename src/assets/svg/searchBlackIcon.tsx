import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SearchBlackIcon(props: any) {
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
          d="M89.121 84.879L63.874 59.632c5.55-6.535 8.583-14.734 8.583-23.403 0-9.677-3.769-18.775-10.611-25.617C55.003 3.769 45.905 0 36.229 0S17.454 3.769 10.611 10.611C3.769 17.454 0 26.552 0 36.229s3.769 18.774 10.611 25.617c6.842 6.843 15.94 10.611 25.617 10.611 8.669 0 16.868-3.033 23.403-8.583l25.247 25.247c.587.586 1.354.879 2.122.879s1.535-.293 2.121-.879a2.998 2.998 0 000-4.242zM14.854 57.604c-11.786-11.786-11.786-30.964 0-42.75 5.893-5.893 13.634-8.839 21.375-8.839s15.481 2.947 21.375 8.839c11.786 11.786 11.786 30.964 0 42.75-11.788 11.785-30.964 11.785-42.75 0z"
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill="#000"
          fillRule="nonzero"
          opacity={1}
        />
      </G>
    </Svg>
  );
}

export default SearchBlackIcon;
