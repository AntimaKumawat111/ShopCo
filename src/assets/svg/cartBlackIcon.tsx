import * as React from "react"
import Svg, { G, Path, Circle } from "react-native-svg"

function CartBlackIcon(props:any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={256}
      height={256}
      viewBox="0 0 256 256"
      {...props}
    >
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
        opacity={1}
      >
        <Path
          d="M73.713 65.44H27.689c-3.566 0-6.377-2.578-6.686-6.13-.21-2.426.807-4.605 2.592-5.939L16.381 21.07a3 3 0 012.927-3.654H87a3 3 0 012.832 3.988l-7.798 22.344a9.153 9.153 0 01-7.063 5.999l-47.389 8.281-.032.005c-.228.04-.623.126-.568.759.056.648.48.648.708.648h46.024a3 3 0 11-.001 6z"
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
        <Circle
          cx={28.25}
          cy={75.8}
          r={6.5}
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
        <Circle
          cx={68.28999999999999}
          cy={75.8}
          r={6.5}
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
          d="M19.306 23.417a3.001 3.001 0 01-2.925-2.347l-1.375-6.155a5.356 5.356 0 00-5.258-4.212H3a3 3 0 110-6h6.749c5.372 0 9.942 3.662 11.113 8.904l1.375 6.155a3 3 0 01-2.931 3.655z"
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

export default CartBlackIcon
