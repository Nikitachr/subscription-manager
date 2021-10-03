import { FC, useState } from 'react';
import { IBaseComponent } from 'interfaces/base-component.interface';
import { ReactComponent as EditIco } from 'assets/icons/edit.svg'
import ProfitInput from 'components/right-side/profit-input';

interface IYourProfitProps {
  profit: number;
  onEditUserProfit: (value: number) => void;
}

const YourProfit: FC<IBaseComponent & IYourProfitProps> = ({ className = '', profit, onEditUserProfit }) => {
  const [isEdit, setIsEdit] = useState<boolean>();

  const handleEnterProfit = (value: number): void => {
    onEditUserProfit(value);
    setIsEdit(false);
  }

  const handleEditButtonClick = (): void => {
    setIsEdit(true);
  }

  return (
    <div className={`${className} flex flex-col gap-2 items-center text-text-main dark:text-white`}>
      <h2 className="font-bold text-md transition duration-500">Your profit</h2>
      {isEdit ? <ProfitInput initialValue={0} onEnter={handleEnterProfit}/> :
        <div className="relative">
          <p className="font-bold text-5xl transition duration-500">{profit}</p>
          <button onClick={handleEditButtonClick} className="absolute top-0 -right-6">
            <EditIco className="fill-current text-text-second hover:text-text dark:hover:text-white"/>
          </button>
        </div>
      }
      <p className="transition duration-500 mb-8">USD/month</p>
    </div>
  );
};

export default YourProfit;
