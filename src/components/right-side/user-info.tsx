import { FC } from 'react';

import { IBaseComponent } from 'interfaces/base-component.interface';
import { useTypedSelector } from 'hooks/use-typed-selector';
import ThemeSwitcher from 'components/right-side/theme-switcher';
import YourProfit from 'components/right-side/your-profit';
import { useActions } from 'hooks/use-actions';
import { ReactComponent as LogoutIco } from 'assets/icons/logout.svg';
import useTheme, { TTheme } from 'hooks/use-theme';

const UserInfo: FC<IBaseComponent> = ({ className = '' }) => {
  const { user } = useTypedSelector(state => state.user)
  const { updateUserProfitAction, logoutUserAction } = useActions();

  const handleEditUserProfit = (value: number): void => {
    updateUserProfitAction(value);
  }

  const handleLogout = (): void => {
    logoutUserAction();
  }

  return (
    <div className={`${className} `}>
      <div className="flex items-center justify-between mb-20">
        <div className="flex pl-2 items-center gap-3 dark:text-white text-text-main transition duration-500">
          <span className="text-lg font-bold">{user?.username}</span>
          <button onClick={handleLogout}>
            <LogoutIco className="fill-current h-5 cursor-pointer"/>
          </button>
        </div>
        <ThemeSwitcher/>
      </div>
      <YourProfit onEditUserProfit={handleEditUserProfit} profit={user?.profit || 0}/>
    </div>
  );
};

export default UserInfo;
