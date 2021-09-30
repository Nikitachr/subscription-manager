import React, { FC, useRef } from 'react';
import { IBaseComponent } from 'interfaces/base-component.interface';
import { ISubscription } from 'interfaces/subscription.interface';
import Row from 'components/layouts/row';
import { ReactComponent as DeleteIco } from 'assets/icons/remove.svg'
import { ReactComponent as EditIco } from 'assets/icons/edit.svg';
import useHover from 'hooks/use-hover';

export interface ISubscriptionProps {
  subscription: ISubscription;
}

const Subscription: FC<IBaseComponent & ISubscriptionProps> = ({ className = '', subscription }) => {
  const hoverRef = useRef(null)
  const isHover = useHover(hoverRef)

  return (
    <div ref={hoverRef} className={
      `${className} ${isHover ? 'bg-white' : ''} p-4 rounded-2xl duration-200`
    }>
      <Row
        firstCol={
          <div className="rounded-xl flex items-center justify-center bg-white-line w-12 h-12">
            <span style={{color: subscription.color}} className="font-bold text-lg">{subscription.service[0]}</span>
          </div>
        }
        secondCol={<span className="text-lg">{subscription.service}</span>}
        thirdCol={<span className="text-lg text-main font-bold">{`$ ${subscription.price}`}</span>}
        fourthCol={<span className="text-main text-lg">{`${subscription.paymentDay}th`}</span>}
        fifthCol={
          isHover ?
          (<div className="flex gap-5">
            <button>
              <EditIco/>
            </button>
           <button>
             <DeleteIco/>
           </button>
          </div>) : <></>
         }
      />
    </div>
  );
};

export default Subscription;
