const DefaultAvatar = ({ className }) => (
  <svg
    width="30"
    height="31"
    viewBox="0 0 30 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className={className}
  >
    <mask
      id="mask0_1185_1519"
      style={{ maskType: "luminance" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="30"
      height="31"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 30.5C23.2843 30.5 30 23.7843 30 15.5C30 7.21573 23.2843 0.5 15 0.5C6.71573 0.5 0 7.21573 0 15.5C0 23.7843 6.71573 30.5 15 30.5Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_1185_1519)">
      <rect
        x="-1.36328"
        y="-2.9093"
        width="34.0909"
        height="35.4545"
        fill="url(#pattern0_1185_1519)"
      />
    </g>
    <defs>
      <pattern
        id="pattern0_1185_1519"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_1185_1519" transform="scale(0.000666667)" />
      </pattern>
      <image
        id="image0_1185_1519"
        width="1500"
        height="1500"
      />
    </defs>
  </svg>
);

export default DefaultAvatar;