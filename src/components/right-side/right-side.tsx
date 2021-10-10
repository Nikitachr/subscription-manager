import { FC } from 'react';
import { IBaseComponent } from 'interfaces/base-component.interface';
import UserInfo from 'components/right-side/user-info';
import YourProfit from 'components/right-side/your-profit';
import SubscriptionsTotal from 'components/right-side/subscriptions-total';
import Chart from 'components/right-side/chart';

const RightSide: FC<IBaseComponent> = ({ className = '' })  => {
  return (
    <div className={`${className} flex flex-col items-center`}>
        <UserInfo className="w-full border-b border-white-line dark:border-black-line transition duration-500"/>
        <SubscriptionsTotal className="py-8 text-text-main dark:text-white transition duration-500"/>
        <Chart className="dark:border-black-line border-8 transition duration-500 border-white-line rounded-3xl py-8 px-6 border-opacity-30"/>
    </div>
  );
};

export default RightSide;
