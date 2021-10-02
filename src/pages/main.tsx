import { FC } from 'react'
import { IBaseComponent } from 'interfaces/base-component.interface'
import LeftSide from 'components/left-side';
import RightSide from 'components/right-side';

const Main: FC<IBaseComponent> = ({ className = '' }) => {
  return (
    <div className="flex flex-col-reverse lg:h-screen w-full py-14 bg-white-bg lg:flex-row">
      <LeftSide className="w-full lg:w-3/4" />
      <RightSide className="w-full mb-4 px-6 lg:mb-0 lg:w-1/4 border-l border-white-line" />
    </div>
  )
}

export default Main
