import * as React from 'react';

function SvgIllustrationFailure(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="139"
      height="136"
      viewBox="0 0 139 136"
      ref={svgRef}
      {...props}
    >
      <defs>
        <circle id="IllustrationFailure_svg__a" cx={67.5} cy={67.5} r={67.5} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1)">
          <mask id="IllustrationFailure_svg__b" fill="#fff">
            <use xlinkHref="#IllustrationFailure_svg__a" />
          </mask>
          <use fill="#f5f5f5" xlinkHref="#IllustrationFailure_svg__a" />
          <g mask="url(#IllustrationFailure_svg__b)">
            <circle
              stroke="#18263c"
              strokeWidth={0.6}
              fill="#fff"
              cx={28}
              cy={28}
              r={27.7}
              transform="translate(20 17)"
            />
          </g>
          <g mask="url(#IllustrationFailure_svg__b)">
            <g fill="#fff" stroke="#18263c">
              <path
                d="M115.673 97.403c-2.058-5.522-9.365-11.58-21.92-18.174C74.92 69.34 86.723 38.7 92.03 38.7c3.523 0 3.038.184 4.55-.834.347-.233 2.688-2.532 2.793-2.94.03-.12 1.726-1.716 1.799-2.819.133-2.004-3.005-3.776-4.756-4.27-2.497-.707-4.923.907-7.278 4.841l-7.866 5.187C67.812 47.533 60.239 78.89 81 90.492c21.925 12.253 25.602 8.498 11.03-11.264"
                strokeWidth={0.6}
              />
              <g strokeWidth={0.4}>
                <path d="M108.424 53L111 65.42 96 69l3.333-12.938z" />
                <path d="M109 53.784c-8.838 3.542-14.809 4.852-17.915 3.931-4.658-1.381-6.934-15.301-5.796-17.904s16.763-8.77 19.502-1.082c1.826 5.126 3.23 10.144 4.21 15.054z" />
              </g>
            </g>
            <path
              d="M97.741 43.066c-2.01-1.302-2.962-.283-2.856 3.057h-2.072c-.16-4.044-2.703-6.066-7.627-6.066-7.386 0-3.55-14.169.468-14.905 1.66-.304 1.328-.136.993.339-.476.676-.984 1.012 1.206 1.012 3.73 0 14.096.057 21.337 3.358 4.827 2.201 5.068 9.381.722 21.542L102.323 53l-4.582-4.049c2.01-2.622 2.01-4.584 0-5.885z"
              fill="#18263c"
            />
            <g stroke="#18263c" strokeWidth={0.4} fill="#d6dae1">
              <path d="M92.666 63.742c.926-1.548-.078-2.065-3.014-1.548C85.25 62.968 71 77.244 71 80.925S78.892 95 80.446 95c1.036 0 5.11-10.419 12.221-31.258z" />
              <path d="M113.946 64.051c-7.575-3.004-13.07 3.67-19.772-1.718s-32.422 55.919-26.858 60.816 43.19 16.517 53.861 11.851c7.115-3.11 8.722-24.379 4.822-63.805-5.286-3.745-9.304-6.126-12.053-7.144z" />
            </g>
          </g>
        </g>
        <g stroke="#18263c">
          <path
            d="M125.018 76.057c-6.15 1.669-10.365 9.983-12.64 24.943-.717 4.704-.01 8.977-5.43 14.269-3.613 3.528-19.929 7.49-48.949 11.888-6.513 1.438-8.71 2.816-6.59 4.136 2.88 1.794 0 3.707 6.59 3.707 5.575 0 5.594-2.69 7.288-2.493 50.493 5.882 69.288-6.506 71.533-33.161 1.496-17.77-2.438-25.533-11.802-23.29z"
            strokeWidth={0.6}
            fill="#fff"
          />
          <path
            d="M137.166 101h-24.789c-5.29-20-1.752-30 10.613-30s17.09 10 14.176 30z"
            strokeWidth={0.4}
            fill="#d6dae1"
          />
          <path
            strokeWidth={0.4}
            fill="#e84236"
            className="tnt-svg-error-color"
            d="M56.433 56.293L48.44 48.74l-7.48 7.993-3.96-3.74L44.48 45l-7.04-6.673 3.74-3.96 7.04 6.673L54.893 34l3.96 3.74-6.6 7.04 7.92 7.553z"
          />
        </g>
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgIllustrationFailure);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
