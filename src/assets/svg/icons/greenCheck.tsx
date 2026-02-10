import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function GreenCheck(props:any) {
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
          d="M60.879 31.299c-6.173 5.123-11.7 10.614-16.569 16.37H44.288c-2.531-4.833-5.459-9.591-8.752-14.248l-14.077 4.832c6.182 6.566 11.571 13.473 16.011 20.67l6.243 10.118 4.665-9.973c4.161-8.895 9.903-17.532 17.283-25.655 7.361-8.13 13.293-13.679 23.373-20.676C77.638 18.82 70.1 23.623 60.879 31.299z"
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill="green"
          fillRule="nonzero"
          opacity={1}
        />
        <Path
          d="M76.876 29.21A35.36 35.36 0 0180.584 45c0 19.62-15.964 35.584-35.584 35.584S9.416 64.62 9.416 45 25.379 9.416 45 9.416c9.278 0 17.734 3.572 24.075 9.409a190.936 190.936 0 018.057-5.287C68.958 5.192 57.576 0 45 0 20.187 0 0 20.187 0 45s20.187 45 45 45 45-20.188 45-45a44.707 44.707 0 00-5.838-22.125 147.4 147.4 0 00-7.286 6.335z"
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill="green"
          fillRule="nonzero"
          opacity={1}
        />
      </G>
    </Svg>
  )
}

export default GreenCheck
