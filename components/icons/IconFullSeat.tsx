import * as React from "react"
import { SVGProps } from "react"

const IconFullSeat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30.005}
    height={27.667}
    data-testid="icon-full-seat"
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1={0.5}
        x2={0.5}
        y2={1.161}
        gradientUnits="objectBoundingBox"
      >
        <stop offset={0} stopColor="#fff" stopOpacity={0} />
        <stop offset={1} stopOpacity={0.196} />
      </linearGradient>
    </defs>
    <path
      fill="#99a1ae"
      fillRule="evenodd"
      d="M4.629 0C3.135 0 1.916 1.51 1.916 3.357v17.048c0 1.848 1.219 3.357 2.713 3.357h21.48c1.488 0 2.719-1.51 2.719-3.357V3.357C28.827 1.51 27.597 0 26.109 0H4.63Z"
      data-name="Path 6991"
    />
    <path
      fill="none"
      d="M4.638 19.539c-1.475 0-2.677 1.512-2.677 3.375v1.384c0 1.857 1.2 3.369 2.677 3.369h21.315c1.482 0 2.689-1.512 2.689-3.369v-1.384c0-1.863-1.207-3.375-2.689-3.375Z"
      data-name="Path 6992"
    />
    <g data-name="Group 13834">
      <path
        fill="#7c8799"
        d="M4.638 19.539c-1.475 0-2.677 1.512-2.677 3.375v1.384c0 1.857 1.2 3.369 2.677 3.369h21.314c1.482 0 2.689-1.512 2.689-3.369v-1.384c0-1.863-1.207-3.375-2.689-3.375Z"
        data-name="Path 6993"
      />
      <path
        fill="url(#a)"
        d="M5.747 32.593c-1.475 0-2.677 1.512-2.677 3.375v1.384c0 1.857 1.2 3.369 2.677 3.369h21.314c1.482 0 2.689-1.512 2.689-3.369v-1.384c0-1.863-1.207-3.375-2.689-3.375Z"
        data-name="Path 6994"
        style={{
          mixBlendMode: "multiply",
          isolation: "isolate",
        }}
        transform="translate(-1.109 -13.054)"
      />
    </g>
    <path
      fill="#c3cbd7"
      fillRule="evenodd"
      d="M28.025 2.044a1.6 1.6 0 0 0-1.42 1.714v13.6a1.592 1.592 0 0 0 1.42 1.7h.565A1.6 1.6 0 0 0 30 17.354v-13.6a1.605 1.605 0 0 0-1.41-1.71h-.565Zm-26.65 0A1.591 1.591 0 0 0 0 3.756v13.6a1.588 1.588 0 0 0 1.375 1.7h.574a1.584 1.584 0 0 0 1.357-1.7v-13.6a1.588 1.588 0 0 0-1.357-1.712h-.574Z"
      data-name="Path 6995"
    />
    <g data-name="Group 13835">
      <path
        fill="#fff"
        d="M17.431 9.128a.639.639 0 0 0-.9 0l-1.019 1.013-1.01-1.013a.639.639 0 1 0-.9.9l1.01 1.013-1.013 1.013a.639.639 0 1 0 .9.9l1.013-1.007 1.013 1.013a.639.639 0 1 0 .9-.9l-1.006-1.019 1.012-1.013a.639.639 0 0 0 0-.9Z"
        data-name="Path 6996"
      />
    </g>
  </svg>
)
export default IconFullSeat
