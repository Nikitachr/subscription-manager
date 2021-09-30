import { FC } from 'react';
import { IBaseComponent } from 'interfaces/base-component.interface';

export interface IRow {
  firstCol: JSX.Element;
  secondCol: JSX.Element;
  thirdCol: JSX.Element;
  fourthCol: JSX.Element;
  fifthCol: JSX.Element;
}

const Row: FC<IBaseComponent & Partial<IRow>> = ({ className = '', ...props }) => {
  return (
    <div className={`${className} flex items-center`}>
      <div className="w-1/12 flex">
        {props.firstCol}
      </div>
      <div className="w-4/12 flex">
        {props.secondCol}
      </div>
      <div className="w-2/12 flex justify-center">
        {props.thirdCol}
      </div>
      <div className="w-4/12 flex justify-end">
        {props.fourthCol}
      </div>
      <div className="w-1/12 flex justify-end">
        {props.fifthCol}
      </div>
    </div>
  );
};

export default Row;
