import { SVGProps } from "react";

export function PointingArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="129"
      height="117"
      viewBox="0 0 129 117"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.3785 32.3097C76.5333 14.2418 107 57.5 72 69C48.0366 76.8737 38.539 19.1654 91.7929 27.5971C134.396 34.3424 112.42 88.0187 96.1066 114.014"
        stroke="#1F1F1F"
        strokeWidth="3"
      />
      <path d="M93 101L95.5 114.5L109 112" stroke="#1F1F1F" strokeWidth="3" />
    </svg>
  );
}
