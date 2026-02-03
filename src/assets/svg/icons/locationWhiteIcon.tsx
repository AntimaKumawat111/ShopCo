import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function LocationWhiteIcon(props:any) {
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
          d="M45.229 90.18l-26.97-31.765a35.381 35.381 0 01-8.404-22.861C9.855 16.048 25.724.18 45.229.18s35.375 15.869 35.375 35.374a35.377 35.377 0 01-8.405 22.861L45.229 90.18zm0-87.059c-17.884 0-32.433 14.549-32.433 32.433a32.439 32.439 0 007.705 20.958l24.728 29.125 24.728-29.125a32.432 32.432 0 007.706-20.958C77.662 17.67 63.113 3.121 45.229 3.121zm0 46.68c-8.499 0-15.413-6.915-15.413-15.414s6.915-15.414 15.413-15.414c8.499 0 15.413 6.915 15.413 15.414s-6.914 15.414-15.413 15.414zm0-27.887c-6.878 0-12.473 5.596-12.473 12.473S38.351 46.86 45.229 46.86s12.473-5.596 12.473-12.473-5.596-12.473-12.473-12.473z"
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
  )
}

export default LocationWhiteIcon
