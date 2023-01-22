import React, { useEffect, useRef } from 'react';
import SvgComponent from './svg-component';
import { addScrollToSvgElement } from 'svg-translate-utils';
import './index.less';

const PageSvgTranslate: React.FC<any> = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      const hooks = addScrollToSvgElement(svgRef.current);
      if (hooks) {
        const { clearEventListener, scrollToPoint } = hooks;

        setTimeout(() => {
          scrollToPoint({ x: 380, y: 225 })
        }, 1000)
        if (clearEventListener) return clearEventListener;
      }
    }
  }, []);

  return (
    <div className='svg-container'>
      <SvgComponent ref={svgRef} />
    </div>
  )
};
export default PageSvgTranslate;