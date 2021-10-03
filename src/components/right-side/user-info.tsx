import { FC } from 'react';

import { IBaseComponent } from 'interfaces/base-component.interface';
import { useTypedSelector } from 'hooks/use-typed-selector';
import ThemeSwitcher from 'components/right-side/theme-switcher';
import YourProfit from 'components/right-side/your-profit';
import { useActions } from 'hooks/use-actions';

const UserInfo: FC<IBaseComponent> = ({ className = '' }) => {
  const { user } = useTypedSelector(state => state.user)
  const { updateUserProfitAction } = useActions();

  const handleEditUserProfit = (value: number): void => {
    updateUserProfitAction(value);
  }

  return (
    <div className={`${className} `}>
      <div className="flex items-center justify-between mb-20">
        <div className="flex items-center gap-4">
          <div className='w-14 h-14 rounded-full bg-green-500'/>
          <span className="text-text-main text-lg dark:text-white font-bold transition duration-500">{user?.username}</span>
        </div>
        <ThemeSwitcher/>
      </div>
      <YourProfit onEditUserProfit={handleEditUserProfit} profit={user?.profit || 0}/>
    </div>
  );
};

export default UserInfo;
