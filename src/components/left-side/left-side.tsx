import { FC, useState } from 'react';

import { IBaseComponent } from 'interfaces/base-component.interface';
import Header from 'components/left-side/header';
import Row from 'components/utils/row';
import Table from 'components/left-side/table';
import Portal from 'components/alerts/portal';
import { EditSubscription } from 'components/forms/edit-subscription';
import { ISubscription } from 'interfaces/subscription.interface';
import { useActions } from 'hooks/use-actions';

let prevValue = {};

const LeftSide: FC<IBaseComponent> = ({ className = '' }) => {
  const { editSubscriptionAction } = useActions()
  const [isAddSubscription, setIsAddSubscription] = useState(false);
  const [editSubscription, setEditSubscription] = useState<ISubscription | null>(null);

  const handleAddClick = (): void => {
    setIsAddSubscription(true);
  };

  const openEditSubscription = (value: ISubscription): void => {
    prevValue = value;
    setEditSubscription(value);
  }

  const closeEditSubscription = (): void => {
    setEditSubscription(null);
  }

  const handleCloseAddSubscription = (): void => {
    setIsAddSubscription(false);
  };

  const handleSubmitEditSubscription = (value: ISubscription): void => {
    editSubscriptionAction(prevValue, value);
    setEditSubscription(null);
  }

  return (
    <div className={`${className} flex flex-col items-center`}>
      <div className='max-w-screen-lg w-full'>
        {editSubscription &&
        <Portal id='modal'>
          <EditSubscription onSubmit={handleSubmitEditSubscription} subscription={editSubscription} onClose={closeEditSubscription} className='absolute' />
        </Portal>}
        <Header className='mb-6' onAddClick={handleAddClick} />
        <Row className='border-b border-white-line dark:border-black-line transition duration-500 px-4'
             secondCol={<span
               className='font-bold dark:text-white text-sm lg:text-lg transition duration-500'>service</span>}
             thirdCol={<span
               className='font-bold dark:text-white text-sm lg:text-lg text-center transition duration-500'>price<br />(USD/month):</span>}
             fourthCol={<span
               className='font-bold text-right dark:text-white text-sm lg:text-lg transition duration-500'>payment every<br />month on the:</span>}
        />
        <Table className='h-full overflow-hidden' onEditSubscription={openEditSubscription} isAddSubscription={isAddSubscription}
               onCloseAddSubscription={handleCloseAddSubscription} />
      </div>
    </div>
  );
};


export default LeftSide;
