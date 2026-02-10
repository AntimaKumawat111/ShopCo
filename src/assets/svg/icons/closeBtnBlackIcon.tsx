import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function CloseBtnBlackIcon(props:any) {
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
          d="M6 90a5.999 5.999 0 01-4.243-10.242l78-78a5.999 5.999 0 018.484 0 5.998 5.998 0 010 8.485l-78 78A5.976 5.976 0 016 90z"
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
        <Path
          d="M84 90a5.979 5.979 0 01-4.242-1.758l-78-78a6 6 0 018.485-8.485l78 78a5.997 5.997 0 010 8.484A5.98 5.98 0 0184 90z"
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

export default CloseBtnBlackIcon
