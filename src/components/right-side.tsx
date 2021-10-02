import { FC } from 'react';
import { IBaseComponent } from 'interfaces/base-component.interface';
import UserInfo from 'components/user-info';

const RightSide: FC<IBaseComponent> = ({ className = '' })  => {
  return (
    <div className={`${className} flex flex-col items-center`}>
        <UserInfo className="w-full border-b border-white-line"/>
    </div>
  );
};

export default RightSide;
