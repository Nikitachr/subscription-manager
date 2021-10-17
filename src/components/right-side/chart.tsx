import { FC, useEffect, useState } from 'react';
import { IBaseComponent } from 'interfaces/base-component.interface';
import PieChart from 'components/right-side/pie-chart';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { ISubscription } from 'interfaces/subscription.interface';
import { getTotalSubscriptions } from 'components/right-side/subscriptions-total';

const getTotalPercent = (subscriptions: ISubscription[], profit?: number): number => {
  if (!profit || !subscriptions.length) {
    return 0;
  }
  return Math.round(getTotalSubscriptions(subscriptions) / (profit / 100));
};

const Chart: FC<IBaseComponent> = ({ className = '' }) => {
  const profit = useTypedSelector(state => state.user.user?.profit);
  const { subscriptions } = useTypedSelector(state => state.subscriptions);

  return (
    <div className={`${className} flex flex-col items-center gap-6`}>
      <h3 className='text-text-main dark:text-white transition duration-500'>On subscriptions, you spend:</h3>
      <PieChart width={180} lineWidth={18} value={getTotalPercent(subscriptions, profit)} />
    </div>
  );
};


export default Chart;
