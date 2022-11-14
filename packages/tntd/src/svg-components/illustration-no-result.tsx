import * as React from 'react'

function SvgIllustrationNoResult(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={143}
      height={140}
      ref={svgRef}
      {...props}
    >
      <style>
        {
          '.illustration-no-result_svg__B{fill:#fff}.illustration-no-result_svg__C{stroke-linejoin:round}.illustration-no-result_svg__D{stroke-width:.5}.illustration-no-result_svg__F{fill-rule:nonzero}'
        }
      </style>
      <defs>
        <circle
          id="illustration-no-result_svg__A"
          cx={67.514}
          cy={67.514}
          r={67.514}
        />
      </defs>
      <g transform="translate(.6)" fill="none" fillRule="evenodd">
        <g transform="translate(6.4)">
          <mask
            id="illustration-no-result_svg__B"
            className="illustration-no-result_svg__B"
          >
            <use xlinkHref="#illustration-no-result_svg__A" />
          </mask>
          <use fill="#f5f5f5" xlinkHref="#illustration-no-result_svg__A" />
          <g stroke="#1a1a1a" mask="url(#illustration-no-result_svg__B)">
            <g className="illustration-no-result_svg__D">
              <path
                d="M78.875 35.396c3.124 6.932.992 15.62-6.396 26.061-7.573 10.703-10.49 24.3-8.75 40.79l36.252 19.008c.759-19.612 4.384-33.212 10.877-40.801s8.934-16.242 7.324-25.962L79.146 35.134a.2.2 0 00-.271.261z"
                className="illustration-no-result_svg__B"
              />
              <path
                d="M95.013 87.565l2.833 20.152-6.388.898-2.832-20.152 6.387-.898z"
                fill={props.color}
              />
            </g>
            <g className="illustration-no-result_svg__F illustration-no-result_svg__C">
              <g className="illustration-no-result_svg__D">
                <path d="M50.609 76.869S67.675 98.691 64.992 65.62c-1.151-6.898 5.953-14.462 12.956-13.225 3.985.695 4.674 1.689.37 2.218.224 1.97-1.59 6.768-5.862 7.481 4.767 12.903 1.888 58.004-30.432 43.481-26.487-11.899-17.075-28.409-17.075-28.409l25.66-.296zm-2.396-33.418L35.222 66.602s17.698 3.392 17.894 2.878 4.368-26.012 4.368-26.012l-9.271-.017z" />
                <path
                  d="M28.149 61.805c10.462-4.117 19.786-2.291 28.718 1.583 7.696 16.124 8.604 38.987 8.347 63.008l-46.691 8.162s-29.789-36.428 9.626-72.754z"
                  fill="#d6dae1"
                />
              </g>
              <path
                d="M63.989 28.215s2.783 24.26-4.183 23.8-17.378-4.227-17.378-4.227-8.75-27.134 21.561-19.573z"
                strokeWidth={0.7}
                className="illustration-no-result_svg__B"
              />
              <path
                d="M36.114 40.437l7.965 4.965s1.84-12.107 4.916-7.836 1.082 4.096 1.082 4.096l2.251.862s.307-7.54 3.979-7.901 8.642 2.427 12.944-7.265l2.421-5.552s-9.375 3.33-16.321-.066-24.1.635-19.237 18.697z"
                strokeWidth={0.4}
                fill="#18263c"
              />
            </g>
          </g>
        </g>
        <g stroke="#1a1a1a">
          <g className="illustration-no-result_svg__C illustration-no-result_svg__F">
            <path
              d="M55.861 91.19s6.952 45.113 37.08 14.303c4.889-5 9.344-5 9.344-6.549-.645-4.107 5.577.047 5.577 5.724 0 3.757-3.773 5.671-7.67 4.77-7.603 11.463-39.837 44.232-58.37 21.878s-11.38-43.633-11.38-43.633l25.421 3.508z"
              strokeWidth={0.7}
              className="illustration-no-result_svg__B"
            />
            <path
              d="M28.471 94.123s-2.929-27.099 17.991-21.644 12.385 24.805 12.385 24.805l-30.376-3.161z"
              fill="#d6dae1"
              className="illustration-no-result_svg__D"
            />
          </g>
          <g
            transform="rotate(16 -174.273 340.865)"
            className="illustration-no-result_svg__B illustration-no-result_svg__D"
          >
            <circle cx={13.404} cy={13.404} r={13.154} />
            <circle cx={13.404} cy={13.404} r={9.679} />
          </g>
        </g>
        <circle
          fill={props.color}
          cx={3}
          cy={34.04}
          r={3}
          className="illustration-no-result_svg__F"
        />
        <g stroke="#18263c" strokeWidth={0.6}>
          <circle cx={17} cy={57.04} r={3} />
          <path d="M34.233 7.963l-6.1-5.033m-1.87 10.522l-6.13-1.522" />
        </g>
      </g>
    </svg>
  )
}

const ForwardRef = React.forwardRef(SvgIllustrationNoResult)
const MemoForwardRef = React.memo(ForwardRef)
export default MemoForwardRef
