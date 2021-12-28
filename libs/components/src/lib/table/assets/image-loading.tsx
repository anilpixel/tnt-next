import * as React from 'react';

// <svg width="80px" height="80px" viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
//   <defs>
//     <circle id="path-1lrguxq6m6-1" cx="40" cy="40" r="40"></circle>
//   </defs>
//   <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
//     <g id="table-loading">
//       <mask id="mask-1lrguxq6m6-2" fill="white">
//         <use xlink:href="#path-1lrguxq6m6-1"></use>
//       </mask>
//       <g id="椭圆形"></g>
//       <g id="编组" mask="url(#mask-1lrguxq6m6-2)" fill-rule="nonzero">
//         <rect id="矩形" fill="#91B7F8" x="0" y="0" width="39" height="80"></rect>
//         <rect id="矩形" fill="#E0EBFF" x="39" y="0" width="41" height="80"></rect>
//       </g>
//     </g>
//   </g>
// </svg>

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
      <defs>
        <mask id="table-loading_svg__a">
          <circle
            cx="40"
            cy="40"
            r="38.5"
            stroke="#fff"
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
            />
          </circle>
        </mask>
      </defs>
      <g mask="url(#table-loading_svg__a)">
        <rect fill="#91b7f8" x="0" y="-10" width="39" height="90">
          <animate
            attributeName="fill"
            values="#91b7f8;#e0ebff"
            dur="1s"
            repeatCount="indefinite"
            begin="-0.5s"
          />
        </rect>
        <rect fill="#e0ebff" x="39" y="-10" width="41" height="90">
          <animate
            attributeName="fill"
            values="#91b7f8;#e0ebff"
            dur="1s"
            repeatCount="indefinite"
            begin="0s"
          />
        </rect>
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgTableLoading);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
