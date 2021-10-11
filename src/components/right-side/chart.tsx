import { FC } from 'react';
import { IBaseComponent } from 'interfaces/base-component.interface';
import PieChart from 'components/right-side/pie-chart';

const Chart: FC<IBaseComponent> = ({ className = '' }) => {
  return (
    <div className={`${className} flex flex-col items-center gap-6`}>
      <h3 className="text-text-main dark:text-white transition duration-500">On subscriptions, you spend:</h3>
      <PieChart width={180} lineWidth={18} value={50}/>
    </div>
  );
};


export default Chart;
