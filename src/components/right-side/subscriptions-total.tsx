import { FC, useEffect, useState } from 'react';

import { IBaseComponent } from 'interfaces/base-component.interface';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { ISubscription } from 'interfaces/subscription.interface';

export const getTotalSubscriptions = (subscriptions?: ISubscription[]): number => {
  if (!subscriptions?.length) {
    return 0;
  }
  return +subscriptions.map(el => el.price).reduce((acc, el) => +acc + +el)
}

const SubscriptionsTotal: FC<IBaseComponent> = ({ className = '' }) => {
  const subscriptions = useTypedSelector(state => state.subscriptions.subscriptions);

  return (
    <div className={`${className} flex flex-col items-center gap-3`}>
      <h3 className="font-bold text-lg">Subscriptions</h3>
      <p className="font-bold text-4xl">{getTotalSubscriptions(subscriptions).toFixed(2)}</p>
      <p>USD/month</p>
    </div>
  );
};

export default SubscriptionsTotal;
