import React from 'react';

const SvgComponent = React.forwardRef<SVGSVGElement, any>((_, ref) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 1050 1050' ref={ref}>
      <g>
        <title>Layer 1</title>
        <rect id="svg_8" height="600" width="800" y="0" x="0" stroke="#000" fill="#ff7f00"/>
        <rect fill="#0fffff" x="31" y="50" width="700.00002" height="349.99999" id="svg_3" stroke="#000"/>
        <ellipse fill="#dfff0f" cx="380.00001" cy="225" id="svg_4" rx="26" ry="26" stroke="#000"/>
        <text fill="#000000" stroke="#000" x="363" y="229.5" id="svg_5" stroke-width="0" font-size="9" font-family="Noto Sans JP" text-anchor="start">380,225</text>
        <ellipse fill="#ffff0f" stroke="#000" cx="600" cy="330" id="svg_6" rx="26" ry="26"/>
        <ellipse fill="#fff" stroke="#000" cx="700" cy="363.5" id="svg_7"/>
        <text fill="#000000" stroke="#000" x="583" y="334.5" id="svg_9" stroke-width="0" font-size="9" font-family="Noto Sans JP" text-anchor="start">600,330</text>
        <ellipse fill="#fbff0f" stroke="#000" cx="100" cy="70" id="svg_10" rx="26" ry="26"/>
        <text fill="#000000" stroke="#000" x="87" y="72.5" id="svg_11" stroke-width="0" font-size="9" font-family="Noto Sans JP" text-anchor="start">100,70</text>
        <text fill="#000000" stroke="#000" x="19" y="46" id="svg_12" stroke-width="0" font-size="9" font-family="Noto Sans JP" text-anchor="start">30,50</text>
        <text fill="#000000" stroke="#000" x="717" y="412" id="svg_13" stroke-width="0" font-size="9" font-family="Noto Sans JP" text-anchor="start">730,400</text>
        <text text-anchor="start" font-family="Noto Sans JP" font-size="24" id="svg_1" y="229.5" x="271" stroke-width="0" stroke="#000" fill="#000000"/>
      </g>
    </svg>
  )
});
export default SvgComponent;