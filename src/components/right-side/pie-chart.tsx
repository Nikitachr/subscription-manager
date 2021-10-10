import React, { FC, useEffect, useRef } from 'react';
import { IBaseComponent } from 'interfaces/base-component.interface';
import * as d3 from 'd3';
import { arc, format, interpolate, interpolateNumber, select, text, transition } from 'd3';

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

const formatNumber = format(",d");

const PieChart: FC<IBaseComponent & IPieChartProps> = ({
                                                         className = '',
                                                         value = 23,
                                                         width = 150,
                                                         lineWidth = 12,
                                                       }) => {
  const ref = useRef(null);
  const arcOuterRadius = width / 2;
  const arcInnerRadius = width / 2 - lineWidth;
  let g: d3.Selection<any, any, any, any>;

  const textStyle = {
    position: 'absolute',
    left: `${width * 0.4}px`,
    top: `${width * 0.5}px`,
    fontSize: '32px',
  }

  const arcGenerator = arc()
    .innerRadius(arcInnerRadius)
    .outerRadius(arcOuterRadius)
    .startAngle(0)
    .cornerRadius(50);

  const transitionBar = (): void => {
    const t = transition().duration(800);

    g
      .transition(t as any)
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

  useEffect(() => {
    initBar();
  }, []);

  return (
    <div className={`${className} `}>
      <svg width={width} height={width}>
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

    </div>
  );
};

export default PieChart;
