import React, { FC } from 'react';
import { IBaseComponent } from 'interfaces/base-component.interface';
import add from 'assets/icons/add.svg';

const Header: FC<IBaseComponent> = ({ className }) => {
  return (
    <div className={`${className} flex justify-between w-full px-6`}>
      <h2 className="text-text-second text-3xl">Subscriptions:</h2>
      <button className="px-2 flex items-center gap-1 py-1 border border-text-second rounded-lg">
        <img src={add} alt='add' />
        <span className="text-text text-lg">add</span>
      </button>
    </div>
  );
};

export default Header;
