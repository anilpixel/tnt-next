import * as React from 'react'

function SvgIllustrationNoAccess(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="155"
      height="135"
      viewBox="0 0 155 135"
      ref={svgRef}
      {...props}
    >
      <defs>
        <circle id="IllustrationNoAccess_svg__a" cx={67.5} cy={67.5} r={67.5} />
      </defs>
      <g transform="translate(.317)" fill="none" fillRule="evenodd">
        <g transform="translate(15.683)">
          <mask id="IllustrationNoAccess_svg__b" fill="#fff">
            <use xlinkHref="#IllustrationNoAccess_svg__a" />
          </mask>
          <use fill="#f5f5f5" xlinkHref="#IllustrationNoAccess_svg__a" />
          <path
            fill="#e1e1e1"
            mask="url(#IllustrationNoAccess_svg__b)"
            d="M122 94l-68.569 32-40.848-21.192L69 94z"
          />
          <g mask="url(#IllustrationNoAccess_svg__b)">
            <path
              d="M95.5 12.25c7.249 0 13.811 2.938 18.562 7.688s7.688 11.313 7.688 18.562h0v55.25h-52.5V38.5c0-7.249 2.938-13.811 7.688-18.562S88.251 12.25 95.5 12.25z"
              stroke="#18263c"
              strokeWidth={0.5}
              fill="#fff"
            />
            <g stroke="#18263c" transform="translate(83 30)">
              <path
                d="M12.648 0c4.598 0 8.339 3.629 8.453 8.147l.003.212v7.633h-2.941V8.36c0-3.011-2.469-5.452-5.515-5.452-2.986 0-5.418 2.346-5.512 5.276l-.003.176v7.633H4.192V8.36C4.192 3.743 7.978 0 12.648 0z"
                strokeWidth={0.6}
                fill="#fff"
                fillRule="nonzero"
              />
              <rect
                strokeWidth={0.4}
                fill="#126bfb"
                className="tnt-svg-primary-color"
                x={0.2}
                y={14.012}
                width={24.6}
                height={19.955}
                rx={3}
              />
            </g>
            <g fill="#fff" transform="translate(83 30)">
              <circle cx={12.5} cy={20.833} r={2.5} />
              <path d="M11.667 20.833h1.667v5h-1.667z" />
            </g>
          </g>
          <g mask="url(#IllustrationNoAccess_svg__b)">
            <path
              d="M45.87 70.207l-5.663-.647 2.897-12.29 8.257.431v13.395c-.094-.028-1.925-.324-5.492-.889z"
              stroke="#1a1a1a"
              strokeWidth={0.5}
              fill="#fff"
            />
            <path
              d="M45.788 34.874c-7.361 1.382-11.444 4.61-12.248 9.69-.717 4.525.177 9.481 2.68 14.867a4 4 0 003.091 2.277l14.378 1.946a4 4 0 003.843-1.713c6.395-9.397 7.446-16.467 3.153-21.212-4.598-5.082-5.971-8.637-4.121-10.664l-10.777 4.808z"
              fill="#18263c"
            />
            <g stroke="#1a1a1a" strokeWidth={0.6}>
              <path
                d="M67.016 91.14c12.714 8.528 22.978 6.362 30.79-6.498 2.187-3.599 4.648-15.407-4.537-21.686-5.138-3.513-16.825-7.061-35.06-10.644-3.474-1.87-5.737-2.228-6.79-1.076-1.58 1.729-2.585 4.682.158 5.116l7.157 1.134c22.008 6.605 28.125 12.951 18.349 19.037S63.952 87.48 67.016 91.14z"
                fill="#fff"
              />
              <path
                d="M28.156 64.725c2.08 0 7.895 0 11.287 1.764s8.922 2.21 13.318 1.295c1.289-.267 21.472-4.595 30.24 3.537 4.015 13.627 3.511 22.585-1.514 26.87-.549.468-5.21-.559-13.987-3.083 6.1 17.906 8.568 36.913 7.407 57.023l-75.925-16.77c10.932-24.104 19.015-39.148 24.25-45.13 1.007-1.152-5.635 3.947-5.758 3.769L1.404 76.722C7.083 68.724 16 64.725 28.156 64.725z"
                fill="#d6dae1"
              />
            </g>
          </g>
        </g>
        <g fill="#fff">
          <path
            d="M18.107 77.742c-.441-.606-4.271 2.63-11.49 9.708-9.063 8.886-8.136 14.36-1.338 19.932 8.173 6.699 28.495 8.543 31.302 6.5.05-.036 6.005-2.901 4.009-6.793s-7.057-1.094-7.241-1.165c-2.599-1.012-13.358-1.983-6.719-8.221 2.417-2.271 4.08-3.213 5.667-4.563l-14.19-15.398z"
            stroke="#1a1a1a"
            strokeWidth={0.6}
          />
          <path
            d="M36.072 43.159l-3.813-8-4.187 2.095zm-12 2.963l-5.008-2.963-.992 4z"
            stroke="#18263c"
            strokeWidth={0.4}
            strokeLinejoin="round"
          />
        </g>
        <circle
          fill="#126bfb"
          className="tnt-svg-primary-color"
          fillRule="nonzero"
          cx={151.283}
          cy={62.04}
          r={3}
        />
      </g>
    </svg>
  )
}

const ForwardRef = React.forwardRef(SvgIllustrationNoAccess)
const MemoForwardRef = React.memo(ForwardRef)
export default MemoForwardRef
