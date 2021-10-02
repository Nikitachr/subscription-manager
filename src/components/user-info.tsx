import { FC } from 'react';

import { IBaseComponent } from 'interfaces/base-component.interface';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { ReactComponent as SunIco } from 'assets/icons/sun.svg';

const UserInfo: FC<IBaseComponent> = ({ className }) => {
  const { user } = useTypedSelector(state => state.user)

  return (
    <div className={`${className} `}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-green-500"></div>
          <span className="text-text-main text-lg font-bold">{user?.username}</span>
        </div>
        <button className="w-10 h-10 flex items-center justify-center hover:shadow-md rounded-full transition duration-300">
          <SunIco className="w-6 h-6"/>
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
