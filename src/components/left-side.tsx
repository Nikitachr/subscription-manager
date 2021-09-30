import React, { FC } from 'react';
import { IBaseComponent } from 'interfaces/base-component.interface';
import Header from 'components/header';
import Row from 'components/layouts/row';
import { ISubscription } from 'interfaces/subscription.interface';
import { v4 as uuidv4 } from 'uuid';
import Subscription from 'components/subscription';

const mockSubscription: ISubscription = {
  service: 'Netflix',
  price: 15.66,
  paymentDay: 12,
  color: '#FC0D1B',
  uid: uuidv4()
}


const LeftSide: FC<IBaseComponent> = ({ className }) => {
  return (
    <div className={`${className} flex flex-col items-center`}>
      <div className='max-w-screen-lg w-full'>
        <Header className="mb-4"/>
        <Row className='border-b border-white-line px-4'
             secondCol={<span className="text-lg">service</span>}
             thirdCol={<span className="text-lg text-center">price<br/>(USD/month):</span>}
             fourthCol={<span className="text-lg">payment every<br/>month on the:</span>}
        />
        <Subscription subscription={mockSubscription}/>
      </div>

    </div>
  );
};


export default LeftSide;
