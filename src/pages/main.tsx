import { FC } from 'react'
import { IBaseComponent } from 'interfaces/base-component.interface'
import LeftSide from 'components/left-side';
import RightSide from 'components/right-side';

const Main: FC<IBaseComponent> = ({ className = '' }) => {
  return (
    <div className="flex h-screen w-full py-14 bg-white-bg">
      <LeftSide className="w-3/4 " />
      <RightSide className="w-1/4 px-10 border-l border-white-line" />
    </div>
  )
}

export default Main
