import * as React from 'react'

function SvgTableLoading(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={135}
      height={135}
      fill="none"
      fillRule="evenodd"
      ref={svgRef}
      {...props}
    >
      <g fillRule="nonzero">
        <path
          d="M.612 67.592c0 36.917 29.927 66.844 66.844 66.844S134.3 104.509 134.3 67.592C134.3 30.675 104.373.748 67.456.748S.612 30.675.612 67.592z"
          fill="#f5f5f5"
        />
        <path
          d="M14.484 94.18v1.7s1.496 1.632 4.964 1.632h97.172s2.652-.816 3.808-1.632v-1.632H14.484v-.068z"
          fill="#d9d9da"
        />
        <path
          d="M26.305 37.57c0-.102 0-.102 0 0 0-.102 0-.102 0 0zm.031-.102h.2-.2z"
          fill="#929397"
        />
        <path
          d="M108.324 37.4h-62.9l3.876 3.4h57.46v50.32h-4.352l3.536 2.72h2.312c.884 0 1.836-.476 1.836-1.36V39.168c.068-.952-.884-1.768-1.768-1.768z"
          fill="#18263c"
        />
        <path
          d="M26.248 37.556h.309-.309zM25.16 92.48V39.1s-.136-.952.544-1.428c.272-.272.816-.272.816-.272h18.904l3.876 3.4H27.88v50.32h74.528l3.536 2.72H26.52s-1.36.204-1.36-1.36z"
          fill="#58585a"
        />
        <path fill="#fff" d="M27.66 40.48h80v51h-80z" />
      </g>
      <g stroke="#1b1b1b" strokeWidth={0.6}>
        <path d="M100.694 49.664v8.4H34.3v-8.4h66.394z" fill="#7eaee9" />
        <g fill="#f3f6fc">
          <path d="M100.694 57.664v8.4H34.3v-8.4h66.394z" />
          <path d="M100.694 65.664v8.4H34.3v-8.4h66.394z" />
          <path d="M100.694 73.664v8.4H34.3v-8.4h66.394z" />
        </g>
        <path d="M54.056 49.364v33m22-33v33" />
      </g>
    </svg>
  )
}

const ForwardRef = React.forwardRef(SvgTableLoading)
const MemoForwardRef = React.memo(ForwardRef)
export default MemoForwardRef
