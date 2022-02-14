import * as React from 'react';

function SvgTableLoading(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={135}
      height={135}
      viewBox="0 0 80 80"
      preserveAspectRatio="xMidYMid"
      display="block"
      ref={svgRef}
      {...props}
    >
      <circle
        cx="40"
        cy="40"
        r="38.5"
        fill="none"
        stroke="#91b7f8"
        strokeLinecap="round"
        strokeDasharray="94.24777960769379 31.41592653589793"
        strokeWidth={3}
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 40 40;360 40 40"
          dur="1s"
          repeatCount="indefinite"
          keyTimes="0;1"
        />
      </circle>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgTableLoading);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
