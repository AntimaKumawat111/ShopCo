import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function UserProfileBlackIcon(props: any) {
  return (
    <Svg
      width="800px"
      height="800px"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M213.333 0a213.333 213.333 0 01213.334 213.333c0 117.821-95.513 213.334-213.334 213.334C95.513 426.667 0 331.154 0 213.333 0 95.513 95.513 0 213.333 0zm21.334 234.667H192c-52.815 0-98.158 31.987-117.715 77.648C105.23 355.706 155.977 384 213.333 384c57.357 0 108.104-28.294 139.049-71.688-19.557-45.658-64.9-77.645-117.715-77.645zM213.333 64c-35.346 0-64 28.654-64 64 0 35.346 28.654 64 64 64 35.347 0 64-28.654 64-64 0-35.346-28.653-64-64-64z"
        transform="translate(42.667 42.667)"
        fill="#000"
        stroke="none"
        strokeWidth={1}
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default UserProfileBlackIcon;
