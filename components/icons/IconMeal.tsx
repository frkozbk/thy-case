import * as React from "react"
import { SVGProps } from "react"

const IconMeal = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={24} data-testid="meal-icon" {...props} >
    <path
      fill="#232B38"
      d="M8 3.08v9.27a1.08 1.08 0 0 0 1 1.09V22c0 1.105 1.895 2 3 2V0c-1.674.033-4.011 1.405-4 3.08zM4.47 0v5.56a.56.56 0 0 1-.46.55h-.59V0H1.71v6.13h-.59a.57.57 0 0 1-.53-.56V0A.6.6 0 0 0 0 .61V8.3a1.42 1.42 0 0 0 1.05 1.38V22c0 1.105 1.895 2 3 2V9.68a1.42 1.42 0 0 0 1-1.38V.61A.6.6 0 0 0 4.47 0zM4 6.13h-.09z"
    />
  </svg>
)
export default IconMeal
