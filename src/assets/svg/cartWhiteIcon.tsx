import * as React from "react"
import Svg, { Path } from "react-native-svg"
import CartBlackIcon from "./cartBlackIcon"

function CartWhiteIcon(props:any) {
  return (
    <Svg
      width="800px"
      height="800px"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#fff"
      {...props}
    >
      <Path
        d="M0 1h15v9H4.6l-.42 2H12a2 2 0 11-2 2H6a2 2 0 11-4 0v-1.354l.983-4.668L2.153 3H0V1z"
        fill="#000"
      />
    </Svg>
  )
}

export default CartWhiteIcon;
