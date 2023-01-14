import { SVGProps } from "react";

export function ScrollUp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="91"
      height="91"
      viewBox="0 0 91 91"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M45.7805 60.1698L45.7805 25.5M45.7805 25.5C47.2943 28.3616 52.6576 34.4811 62 36.066M45.7805 25.5L45.7805 66M45.7805 25.5C44.2667 28.3616 38.9034 34.4811 29.561 36.066"
        stroke="#1F1F1F"
        strokeWidth="2"
      />
      <circle
        cx="45.5"
        cy="45.5"
        r="44.75"
        transform="rotate(-180 45.5 45.5)"
        stroke="#1F1F1F"
        strokeWidth="1.5"
      />
    </svg>
  );
}
