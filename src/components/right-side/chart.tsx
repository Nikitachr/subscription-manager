import { FC, useEffect, useState } from 'react';
import { IBaseComponent } from 'interfaces/base-component.interface';
import PieChart from 'components/right-side/pie-chart';

const Chart: FC<IBaseComponent> = ({ className = '' }) => {
  const [value, setValue] = useState(100)

  useEffect(() => {
    setTimeout(() => {
      setValue(100)
    }, 5000)
  }, [])

  return (
    <div onClick={() => setValue(100)} className={`${className} flex flex-col items-center gap-6`}>
      <h3 className="text-text-main dark:text-white transition duration-500">On subscriptions, you spend:</h3>
      <PieChart width={180} lineWidth={18} value={value}/>
    </div>
  );
};


export default Chart;
