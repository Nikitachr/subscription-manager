import { FC, useState } from 'react';

import { IBaseComponent } from 'interfaces/base-component.interface';
import Header from 'components/header';
import Row from 'components/utils/row';
import Table from 'components/table';

const LeftSide: FC<IBaseComponent> = ({ className }) => {
  const [isAddSubscription, setIsAddSubscription] = useState(false);

  const handleAddClick = (): void => {
    setIsAddSubscription(true);
  };

  const handleCloseAddSubscription = (): void => {
    setIsAddSubscription(false);
  }

  return (
    <div className={`${className} flex flex-col items-center`}>
      <div className='max-w-screen-lg w-full'>
        <Header className='mb-4' onAddClick={handleAddClick}/>
        <Row className='border-b border-white-line px-4'
             secondCol={<span className='font-bold text-sm lg:text-lg'>service</span>}
             thirdCol={<span className='font-bold text-sm lg:text-lg text-center'>price<br />(USD/month):</span>}
             fourthCol={<span className='font-bold text-sm lg:text-lg'>payment every<br />month on the:</span>}
        />
        <Table isAddSubscription={isAddSubscription} onCloseAddSubscription={handleCloseAddSubscription}/>
      </div>
    </div>
  );
};


export default LeftSide;
