import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function UserProfileBlackIcon(props:any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={256}
      height={256}
      viewBox="0 0 256 256"
      {...props}
    >
      <G
        stroke="none"
        strokeWidth={0}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit={10}
        fill="none"
        fillRule="nonzero"
        opacity={1}
      >
        <Path
          d="M45 0C20.147 0 0 20.147 0 45s20.147 45 45 45 45-20.147 45-45S69.853 0 45 0zm0 22.007c8.899 0 16.14 7.241 16.14 16.14 0 8.9-7.241 16.14-16.14 16.14-8.9 0-16.14-7.24-16.14-16.14 0-8.899 7.24-16.14 16.14-16.14zm0 61.836c-11.135 0-21.123-4.885-27.957-12.623 3.177-5.75 8.144-10.476 14.05-13.341 2.009-.974 4.354-.958 6.435.041a17.113 17.113 0 007.473 1.696c2.615 0 5.13-.571 7.473-1.696 2.083-1 4.428-1.015 6.435-.041 5.906 2.864 10.872 7.591 14.049 13.341C66.123 78.957 56.135 83.843 45 83.843z"
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
  )
}

export default UserProfileBlackIcon;
