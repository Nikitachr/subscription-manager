import { FC } from 'react';
import { IBaseComponent } from 'interfaces/base-component.interface';

const RightSide: FC<IBaseComponent> = ({ className = '' })  => {
  return (
    <div className={`${className} `}>
        Right side
    </div>
  );
};

export default RightSide;
