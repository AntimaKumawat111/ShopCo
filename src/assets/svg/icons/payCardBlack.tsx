import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function PayCardBlackIcon(props:any) {
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
          d="M84.04 14.786H5.96A5.967 5.967 0 000 20.746v48.508a5.967 5.967 0 005.96 5.96h78.08a5.967 5.967 0 005.96-5.96V20.746a5.967 5.967 0 00-5.96-5.96zm-78.08 4h78.08c1.081 0 1.96.879 1.96 1.96v5.381H4v-5.381c0-1.08.879-1.96 1.96-1.96zm78.08 52.428H5.96A1.962 1.962 0 014 69.254V30.127h82v39.126a1.962 1.962 0 01-1.96 1.961z"
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
          d="M76.187 49.627h-8.476a2.368 2.368 0 00-2.368 2.368v7.508a2.368 2.368 0 002.368 2.368h8.476a2.368 2.368 0 002.368-2.368v-7.508a2.368 2.368 0 00-2.368-2.368z"
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

export default PayCardBlackIcon
