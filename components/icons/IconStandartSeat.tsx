import * as React from "react"
import { SVGProps } from "react"

const IconStandartSeat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30.005}
    height={28.583}
    data-testid="icon-standart-seat"
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
      fill="#232b38"
      fillRule="evenodd"
      d="M4.71 0C3.216 0 1.997 1.51 1.997 3.357v17.049c0 1.848 1.219 3.357 2.713 3.357h21.48c1.488 0 2.719-1.51 2.719-3.357V3.357C28.909 1.509 27.678 0 26.19 0Z"
      data-name="Path 6975"
    />
    <path
      fill="none"
      d="M4.638 20.455c-1.475 0-2.677 1.512-2.677 3.375v1.384c0 1.857 1.2 3.369 2.677 3.369h21.315c1.482 0 2.689-1.512 2.689-3.369V23.83c0-1.863-1.207-3.375-2.689-3.375Z"
      data-name="Path 6976"
    />
    <g data-name="Group 13830">
      <path
        fill="#7c8799"
        d="M4.638 20.455c-1.475 0-2.677 1.512-2.677 3.375v1.384c0 1.857 1.2 3.369 2.677 3.369h21.314c1.482 0 2.689-1.512 2.689-3.369V23.83c0-1.863-1.207-3.375-2.689-3.375Z"
        data-name="Path 6977"
      />
      <path
        fill="url(#a)"
        d="M5.747 32.593c-1.475 0-2.677 1.512-2.677 3.375v1.384c0 1.857 1.2 3.369 2.677 3.369h21.314c1.482 0 2.689-1.512 2.689-3.369v-1.384c0-1.863-1.207-3.375-2.689-3.375Z"
        data-name="Path 6978"
        style={{
          mixBlendMode: "multiply",
          isolation: "isolate",
        }}
        transform="translate(-1.109 -12.138)"
      />
    </g>
    <path
      fill="#c3cbd7"
      fillRule="evenodd"
      d="M28.025 2.96a1.6 1.6 0 0 0-1.42 1.714v13.6a1.592 1.592 0 0 0 1.42 1.7h.565A1.6 1.6 0 0 0 30 18.27V4.67a1.605 1.605 0 0 0-1.41-1.71h-.565Zm-26.65 0A1.591 1.591 0 0 0 0 4.672v13.6a1.588 1.588 0 0 0 1.375 1.7h.574a1.584 1.584 0 0 0 1.357-1.7v-13.6A1.588 1.588 0 0 0 1.949 2.96h-.574Z"
      data-name="Path 6979"
    />
  </svg>
)
export default IconStandartSeat
