import { FC, useEffect, useState } from 'react';

import { IBaseComponent } from 'interfaces/base-component.interface';
import { useTypedSelector } from 'hooks/use-typed-selector';

const SubscriptionsTotal: FC<IBaseComponent> = ({ className = '' }) => {
  const subscriptions = useTypedSelector(state => state.subscriptions.subscriptions);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    if (subscriptions?.length) {
      setTotal(+subscriptions.map(el => el.price).reduce((acc, el) => +acc + +el));
    }
  }, [subscriptions])

  return (
    <div className={`${className} flex flex-col items-center gap-3`}>
      <h3 className="font-bold text-lg">Subscriptions</h3>
      <p className="font-bold text-4xl">{total.toFixed(2)}</p>
      <p>USD/month</p>
    </div>
  );
};

export default SubscriptionsTotal;
