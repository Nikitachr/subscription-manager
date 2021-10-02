import React, { FC, useRef } from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { IBaseComponent } from 'interfaces/base-component.interface';
import { ISubscription } from 'interfaces/subscription.interface';
import Row from 'components/utils/row';
import { ReactComponent as DeleteIco } from 'assets/icons/remove.svg'
import { ReactComponent as EditIco } from 'assets/icons/edit.svg';
import useHover from 'hooks/use-hover';

export interface ISubscriptionProps {
  subscription: ISubscription;
  onDeleteSubscription: (id: string) => void;
}

const Subscription: FC<IBaseComponent & ISubscriptionProps> = ({ className = '', subscription, onDeleteSubscription }) => {
  const hoverRef = useRef(null)
  const isHover = useHover(hoverRef)

  return (
    <>
      <ContextMenuTrigger id={`${subscription.uid}menu`}>
        <div ref={hoverRef} className={
          `${className} ${isHover ? 'bg-white' : ''} p-4 rounded-2xl duration-200 cursor-pointer`
        }>
          <Row
            firstCol={
              <div style={{backgroundColor: subscription.color+'33'}} className="rounded-xl flex items-center justify-center bg-white-line w-8 h-8 lg:w-12 lg:h-12">
                <span style={{color: subscription.color}} className="font-bold text-lg">{subscription.service[0]}</span>
              </div>
            }
            secondCol={<span className="lg:text-lg truncate">{subscription.service}</span>}
            thirdCol={<span className="lg:text-lg text-main font-bold">{`$ ${subscription.price}`}</span>}
            fourthCol={<span className="lg:text-main text-lg">{`${subscription.paymentDay}th`}</span>}
            fifthCol={
              isHover ?
                (<div className="flex gap-5">
                  <button>
                    <EditIco/>
                  </button>
                  <button onClick={() => onDeleteSubscription(subscription.uid)}>
                    <DeleteIco/>
                  </button>
                </div>) : <></>
            }
          />
        </div>
      </ContextMenuTrigger>
      <div>
        <ContextMenu className="bg-white p-1.5 rounded-xl shadow-md" id={`${subscription.uid}menu`}>
          <MenuItem className="hover:bg-white-line px-2 py-1 rounded cursor-pointer flex items-center gap-2">
            <EditIco/>
            <span>Edit</span>
          </MenuItem>
          <MenuItem onClick={() => onDeleteSubscription(subscription.uid)} className="hover:bg-white-line px-2 py-1 rounded cursor-pointer flex items-center gap-2">
            <DeleteIco/>
            <span className="ml-1">Delete</span>
          </MenuItem>
        </ContextMenu>
      </div>

    </>
  );
};

export default Subscription;
