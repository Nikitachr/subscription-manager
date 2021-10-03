import { FC, useState } from 'react';

import { IBaseComponent } from 'interfaces/base-component.interface';
import Header from 'components/left-side/header';
import Row from 'components/utils/row';
import Table from 'components/left-side/table';

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
        <Row className='border-b border-white-line dark:border-black-line transition duration-500 px-4'
             secondCol={<span className='font-bold dark:text-white text-sm lg:text-lg transition duration-500'>service</span>}
             thirdCol={<span className='font-bold dark:text-white text-sm lg:text-lg text-center transition duration-500'>price<br />(USD/month):</span>}
             fourthCol={<span className='font-bold dark:text-white text-sm lg:text-lg transition duration-500'>payment every<br />month on the:</span>}
        />
        <Table isAddSubscription={isAddSubscription} onCloseAddSubscription={handleCloseAddSubscription}/>
      </div>
    </div>
  );
};


export default LeftSide;
