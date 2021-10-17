import React, { FC, useEffect, useRef } from 'react';
import { IBaseComponent } from 'interfaces/base-component.interface';
import * as d3 from 'd3';
import { arc, format, interpolate, interpolateNumber, select, text, Transition, transition } from 'd3';

interface IPieChartProps {
  value: number;
  width: number;
  lineWidth: number;
}

const arcTween = (newAngle: number, arcGenerator: d3.Arc<any, any>): any => (d: any) => {
  const customInterpolate = interpolate(d.endAngle, newAngle);
  return (t: any) => {
    d.endAngle = customInterpolate(t);
    return arcGenerator(d);
  };
};

const tau = 2 * Math.PI;
const formatNumber = format(',d');
let g: d3.Selection<SVGPathElement, { endAngle: number; }, null, undefined> | null;

const PieChart: FC<IBaseComponent & IPieChartProps> = ({
                                                         className = '',
                                                         value = 23,
                                                         width = 150,
                                                         lineWidth = 12,
                                                       }) => {
  const ref = useRef(null);
  const textRef = useRef(null);
  const arcOuterRadius = width / 2;
  const arcInnerRadius = width / 2 - lineWidth;

  const textStyle: { [key: string]: string } = {
    position: 'absolute',
    left: `${width * 0.3}px`,
    top: `${width * 0.3}px`,
    fontSize: '32px',
  };

  const arcGenerator = arc()
    .innerRadius(arcInnerRadius)
    .outerRadius(arcOuterRadius)
    .startAngle(0)
    .cornerRadius(50);

  const transitionBar = (): void => {
    const t = transition().duration(800);
    if (!g) {
      return;
    }
    g
      .transition(t as Transition<any, any, any, any>)
      .duration(750)
      .attrTween('d', arcTween((value * tau) / 100, arcGenerator));
  };

  const initBar = (): void => {
    const node = ref.current;
    const initialValue = 0;
    g = select(node)
      .append('path')
      .datum({ endAngle: (initialValue / 100) * tau });
    transitionBar();
  };

  function renderText(): void {
    const node = textRef.current;
    const tr = transition().duration(800);

    select(node)
      .transition(tr as Transition<any, any, any, any>)
      .tween('text', function() {
        const i = interpolateNumber(+select(this).text().replace(/,/g, ''), value);
        return function(t) {
          +select(this).text(formatNumber(i(t)));
        };
      });
  }

  useEffect(() => {
    return () => {g = null}
  }, [])

  useEffect(() => {
    g ? transitionBar() : initBar();
    renderText();
  }, [value]);

  return (
    <div className={`${className} relative`}>
      <svg className="relative" width={width} height={width}>
        <g className='background-bar-group' transform={`translate(${width / 2}, ${width / 2})`}>
          <path className='fill-current dark:opacity-80 opacity-10 text-white-line dark:text-white '
                d={arcGenerator({
                  endAngle: tau,
                  innerRadius: arcInnerRadius,
                  outerRadius: arcOuterRadius,
                  startAngle: 0,
                }) as string}
          />
        </g>
        <g
          ref={ref}
          className='fill-current text-chart-line'
          transform={`translate(${width / 2}, ${width / 2})`}
        />
      </svg>
      <div className="flex flex-col items-center text-text-main dark:text-white transition duration-500" style={textStyle}>
        <div>
          <span ref={textRef}>0</span>
          <span>%</span>
        </div>
        <p className="text-base">of income</p>
      </div>
    </div>
  );
};

export default PieChart;
