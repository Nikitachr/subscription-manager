import { FC, useEffect } from 'react';
import { IBaseComponent } from 'interfaces/base-component.interface'
import LeftSide from 'components/left-side/left-side';
import RightSide from 'components/right-side/right-side';
import { useActions } from 'hooks/use-actions';

const Main: FC<IBaseComponent> = ({ className = '' }) => {
  const { loadUserAction, loadSubscriptionsAction } = useActions()

  useEffect(() => {
    loadUserAction();
    loadSubscriptionsAction();
  }, [])

  return (
    <div className="flex min-h-screen flex-col-reverse justify-end lg:h-screen w-full py-14 bg-white-bg dark:bg-black-bg transition duration-500 lg:flex-row">
      <LeftSide className="w-full lg:w-3/4" />
      <RightSide className="w-full mb-4 px-6 lg:mb-0 lg:w-1/4 border-l border-white-line dark:border-black-line transition duration-500" />
    </div>
  )
}

export default Main
