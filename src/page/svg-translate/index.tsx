import React, { useEffect, useRef } from 'react';
import SvgComponent from './svg-component';
import { addScrollToSvgElement } from 'svg-translate-utils';
import './index.less';

const PageSvgTranslate: React.FC<any> = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      addScrollToSvgElement(svgRef.current);
    }
  }, []);

  return (
    <div className='svg-container'>
      <SvgComponent ref={svgRef} />
    </div>
  )
};
export default PageSvgTranslate;