import React, { FC } from 'react';
import { IBaseComponent } from 'interfaces/base-component.interface';
import { AddSubscriptionRow } from 'components/forms/add-subscription-row';
import Subscription from 'components/left-side/subscription';
import { ISubscription } from 'interfaces/subscription.interface';
import { v4 as uuidv4 } from 'uuid';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';

const mockSubscription: ISubscription = {
  service: 'Netflix',
  price: 15.66,
  paymentDay: 12,
  color: '#FC0D1B',
  uid: uuidv4(),
};

interface ITableProps {
  isAddSubscription?: boolean;
  onCloseAddSubscription: () => void;
}

const Table: FC<IBaseComponent & ITableProps> = ({
                                                   className = '',
                                                   isAddSubscription = false,
                                                   onCloseAddSubscription,
                                                 }) => {
  const { subscriptions } = useTypedSelector(state => state.subscriptions);
  const { addSubscriptionAction, deleteSubscriptionAction } = useActions();

  const handleAddSubscription = (value: ISubscription): void => {
    onCloseAddSubscription();
    addSubscriptionAction(value);
  };

  const handleDeleteSubscription = (id: string): void => {
    deleteSubscriptionAction(id);
  }

  return (
    <div className={`${className} `}>
        <AnimatePresence>
          {isAddSubscription &&
          <motion.div layout key={'add'} initial={{ opacity: 0, y: -80 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -80 }}
          >
            <AddSubscriptionRow onAddSubscription={handleAddSubscription} onCloseClick={onCloseAddSubscription} />
          </motion.div>}
          {subscriptions.map(subscription => (
            <motion.div key={subscription.uid} layout
                        initial={{ opacity: 0, y: -80 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -80 }}>
              <Subscription onDeleteSubscription={handleDeleteSubscription} subscription={subscription} />
            </motion.div>
          ))}

        </AnimatePresence>
    </div>
  );
};

export default Table;
