import { FC } from 'react';

import { IBaseComponent } from 'interfaces/base-component.interface';
import { ReactComponent as AddIco } from 'assets/icons/add.svg';

interface IHeaderProps {
  onAddClick?: () => void;
}

const Header: FC<IBaseComponent & IHeaderProps> = ({ className = '',  onAddClick}) => {
  return (
    <div className={`${className} flex justify-between w-full px-6`}>
      <h2 className="text-text-second dark:text-white transition duration-500 text-3xl">Subscriptions:</h2>
      <button onClick={onAddClick} className="px-2 flex items-center gap-1 py-1 border border-text-second dark:border-white-line transition duration-500 rounded-lg">
        <AddIco className="fill-current dark:text-white transition duration-500"/>
        <span className="text-text text-lg dark:text-white transition duration-500">add</span>
      </button>
    </div>
  );
};

export default Header;
